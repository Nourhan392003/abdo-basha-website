/* ============ عناوين سينمائية: كتابة حرف حرف + خط دهبي بيترسم ============
   بتشتغل على عناوين الأقسام (#menu, #about, #gallery, #visit) وعلى عناوين رحلة الهيرو.
   بتستخدم IntersectionObserver + CSS animations — خفيفة ومش محتاجة مكتبات. */
(function(){
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const titles = [
    ...document.querySelectorAll(".section-head h2, .about-text h2, .visit h2, .jt-head h2")
  ];
  if(!titles.length) return;

  /* تجهيز كل عنوان: نلفّ كل حرف في span ونضيف خط دهبي تحت الكلمة المميزة */
  titles.forEach(h => {
    if(h.dataset.cine) return;
    h.dataset.cine = "1";
    h.classList.add("cine");
    /* نعمل للكلمة المميزة (em) خط دهبي بينرسم */
    h.querySelectorAll("em").forEach(em => {
      em.classList.add("cine-em");
      if(!em.querySelector(".cine-line")){
        const line = document.createElement("i");
        line.className = "cine-line";
        em.appendChild(line);
      }
    });
    /* لو مفيش em، نحدد آخر كلمتين كخط دهبي */
    if(!h.querySelector("em") && !h.querySelector("br")) markLastWords(h);
    /* نلف الحروف */
    wrapChars(h);
  });

  /* لو العنوان مفيهوش كلمة مميزة: نعمل للكلمة الأخيرة خط دهبي */
  function markLastWords(h){
    const parts = h.textContent.replace(/\s+/g," ").trim().split(" ");
    if(parts.length < 2) return;
    const last = parts.pop();
    h.innerHTML = parts.join(" ") + ' <em class="cine-em">' + last + '<i class="cine-line"></i></em>';
  }

  function wrapChars(h){
    /* العربية موصولة: نقسّم لكلمات مش حروف (عشان التشكيل ميبوظش) */
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if(n.nodeType === 3){
          const txt = n.textContent;
          if(!txt.trim()) return;
          const frag = document.createDocumentFragment();
          txt.split(/(\s+)/).forEach(part => {
            if(!part) return;
            if(/^\s+$/.test(part)){ frag.appendChild(document.createTextNode(part)); return; }
            const s = document.createElement("span");
            s.className = "ch";
            s.textContent = part;
            frag.appendChild(s);
          });
          n.replaceWith(frag);
        } else if(n.nodeType === 1 && n.tagName !== "BR" && !n.classList.contains("cine-line")){
          walk(n);
        }
      });
    };
    walk(h);
    h.querySelectorAll(".ch").forEach((s,i) => s.style.setProperty("--i", i));
    const total = h.querySelectorAll(".ch").length;
    h.querySelectorAll(".cine-line").forEach(l => l.style.setProperty("--n", total));
  }

  if(reduced){
    titles.forEach(h => h.classList.add("cine-in"));
    return;
  }

  /* نستخدم IntersectionObserver + فحص احتياطي (متوافق مع Lenis) */
  const reveal = h => { if(!h.classList.contains("cine-in")) h.classList.add("cine-in"); };
  const io = new IntersectionObserver((entries) => {
    entries.forEach(en => { if(en.isIntersecting){ reveal(en.target); io.unobserve(en.target); } });
  }, {rootMargin:"0px 0px -10% 0px", threshold:0});
  titles.forEach(h => io.observe(h));

  /* فحص احتياطي: كل فريم نتأكد مين دخل الشاشة (أضمن مع أي نوع سكرول) */
  let running = true, lastY = -1;
  (function loop(){
    if(!running) return;
    const y = Math.round(scrollY);
    if(y !== lastY){
      lastY = y;
      const vh = innerHeight;
      titles.forEach(h => {
        if(h.classList.contains("cine-in")) return;
        const r = h.getBoundingClientRect();
        if(r.top < vh * .94 && r.bottom > 0) reveal(h);
      });
    }
    requestAnimationFrame(loop);
  })();
  /* توقف مؤقت للتوفير لو الصفحة مخفية */
  document.addEventListener("visibilitychange", ()=>{ running = !document.hidden; if(running) requestAnimationFrame(function l(){ if(!running) return; const y=Math.round(scrollY); if(y!==lastY){lastY=y; const vh=innerHeight; titles.forEach(h=>{ if(h.classList.contains("cine-in"))return; const r=h.getBoundingClientRect(); if(r.top<vh*.94&&r.bottom>0) reveal(h); });} requestAnimationFrame(l); }); });

  /* عناوين الهيرو: بتشتغل مع تغيير المشهد */
  const hero = document.getElementById("hero-section");
  hero?.addEventListener("slidechange", e => {
    const stage = document.querySelector(`.j-stage[data-s="${e.detail.slide}"]`);
    stage?.querySelectorAll(".jt-title").forEach(t => {
      t.classList.remove("cine-in");
      void t.offsetWidth;            /* إعادة تشغيل الحركة */
      t.querySelectorAll(".ch").forEach((s,i)=> s.style.setProperty("--i", i));
      t.classList.add("cine-in");
    });
  });
})();
