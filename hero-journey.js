/* ============ HERO JOURNEY — 4 مشاهد بتبني بالأسكرول ============
   1) قهوة تركي بتتولع  2) طبقات الكيك بتتركب  3) آيس كوفي بيصب  4) المنيو
   Pin + Scrub بـ ScrollTrigger، سمووث سكرول بـ Lenis. */
(function(){
  const journey = document.getElementById("journey");
  if(!journey || !window.gsap){ console.warn("[journey] static fallback (journey node or gsap missing)"); return; }
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hasST = !!window.ScrollTrigger;

  /* Lenis سمووث سكرول — ده اللي بيدي الإحساس الغني */
  if(!reduced && window.Lenis){
    document.documentElement.style.scrollBehavior = "auto";
    const lenis = new Lenis({ lerp:.09 });
    window.__lenis = lenis;
    lenis.on("scroll", ()=>{ if(hasST) ScrollTrigger.update(); });
    gsap.ticker.add(t => lenis.raf(t*1000));
    gsap.ticker.lagSmoothing(0);
  }

  /* سكرول ناعم موحد لروابط الأقسام */
  let layoutReady = Promise.resolve(); // بيتحط لاحقًا: fonts.ready + ScrollTrigger.refresh
  window.smoothTo = function(id, offset){
    const el = document.getElementById(id);
    if(!el) return;
    if(window.__lenis) window.__lenis.scrollTo(el, {offset: offset ?? -64, duration:1.25});
    else el.scrollIntoView({behavior:"smooth"});
  };
  document.addEventListener("click", e=>{
    const a = e.target.closest('a[href^="#"]');
    if(!a || !window.__lenis) return;
    const el = document.getElementById(a.getAttribute("href").slice(1));
    if(!el) return;
    e.preventDefault();
    /* نستنى تحميل الخطوط + إعادة قياس ScrollTrigger يخلصوا الأول */
    const go = ()=> window.__lenis.scrollTo(el, {offset:-64, duration:1.3});
    layoutReady.then(()=> setTimeout(go, 80));
  });

  /* الأفلام: كل فيلم بيتشغل بس لما مشهدها يبقى نشط */
  const films = {};
  journey.querySelectorAll("video[data-film]").forEach(v=> films[v.dataset.film] = v);
  /* النسخ الضبابية (خلفية مالية الفراغات على الموبايل) */
  const ambients = {};
  journey.querySelectorAll("video[data-amb]").forEach(v=> ambients[v.dataset.amb] = v);

  let filmOn = null;
  function driveFilm(name){
    if(filmOn === name) return;
    filmOn = name;
    Object.entries(films).forEach(([k,v])=>{
      if(!v) return;
      v.classList.toggle("on", k === name);
      if(k === name){
        /* لو الفيديو خلص أو بعيد، نرجعه للبداية بس مش كل مرة */
        if(v.ended) v.currentTime = 0;
        v.play().catch(()=>{});
      }
      else v.pause();
    });
    /* الخلفية الضبابية: بتظهر وتشتغل مع نفس المشهد */
    Object.entries(ambients).forEach(([k,v])=>{
      if(!v) return;
      const show = (k === name);
      v.classList.toggle("on", show);
      if(show) v.play().catch(()=>{}); else v.pause();
    });
  }

  /* فيلم الآيس كوفي: بيتحرك بالأسكرول، ولو المستخدم واقف بيدور لوحده بهدوء */
  const ICE_IN = 1.2, ICE_OUT = 4.6;   /* المدى: كوباية كاملة → رشة اللبن */
  const iceV = journey.querySelector(".j-scrub-film");
  let iceTarget = ICE_IN, iceCur = ICE_IN, iceActive = false;
  let iceUserMoved = 0;          /* آخر وقت المستخدم سكرول جوه المشهد */
  function setIceActive(on){
    on = !!on;
    if(iceV){
      iceV.classList.toggle("on", on);
      iceV.style.opacity = on ? "" : "0";   /* ضمان مباشر كمان */
    }
    /* الخلفية الضبابية للآيس تظهر معاه */
    const ambIce = ambients["iced"];
    if(ambIce){
      ambIce.classList.toggle("on", on);
      if(on) ambIce.play().catch(()=>{}); else ambIce.pause();
    }
    if(iceActive === on) return;
    iceActive = on;
    if(on) iceUserMoved = 0;     /* نبدأ العد من جديد كل ما يدخل المشهد */
  }
  gsap.ticker.add((time)=>{
    if(!iceActive || !iceV || !iceV.duration) return;
    /* لو المستخدم مش بيسكرول من 1.2 ثانية، ندوّر الفيديو بهدوء لوحده */
    const idle = (performance.now() - iceUserMoved) > 1200;
    if(idle){
      iceTarget += 0.006;                                   /* سرعة بطيئة ناعمة */
      if(iceTarget > ICE_OUT) iceTarget = ICE_IN;           /* نلف تاني */
    }
    iceCur += (iceTarget - iceCur) * .14;
    if(Math.abs(iceTarget - iceCur) < .004) iceCur = iceTarget;
    try{ iceV.currentTime = iceCur; }catch(e){}
  });
  window.__iceDebug = () => ({target: +iceTarget.toFixed(2), cur: +iceCur.toFixed(2), active: iceActive, dur: iceV && +iceV.duration.toFixed(2)});

  /* الحالات النهائية — لوضع تقليل الحركة (كل حاجة مكتملة من غير حركة) */
  function applyFinalStates(){
    gsap.set(".ck-band",{y:0,opacity:1,scale:1,rotation:0,autoAlpha:1});
    gsap.set(".s2 .j-visual",{scale:1});
    if(iceV){
      iceV.classList.add("on");
      try{ iceV.currentTime = ICE_IN; }catch(e){}
    }
    gsap.set(".j-chip-product,.s4 .jt-head,.s4 .hv-card,.s4 .j-cta,.s4 .j-hint",{opacity:1,y:0,visibility:"visible"});
  }

  /* وضع آمن: مفيش ScrollTrigger أو المستخدم طالب تقليل حركة */
  if(!hasST || reduced){
    journey.classList.add("reduced");
    Object.values(films).forEach(v=>{ if(v) v.pause(); });
    applyFinalStates();
    return;
  }

  gsap.registerPlugin(ScrollTrigger);
  gsap.defaults({overwrite:"auto"});

  /* بعد ما الخطوط تخلص، الارتفاعات بتتغير — نعمل refresh للقياسات
     ونخلي أي نداء سكرول يستنى الـ refresh ده يخلص (بيدبل-tick داخليًا) */
  if(document.fonts) layoutReady = document.fonts.ready.then(()=> ScrollTrigger.refresh());
  const $  = s => journey.querySelector(s);
  const $$ = s => [...journey.querySelectorAll(s)];

  /* الحالات الابتدائية */
  gsap.set(".ck-band", {autoAlpha:0});
  gsap.set(".ice-photo", {autoAlpha:0});
  gsap.set(".j-chip-product",{autoAlpha:0,y:26});
  gsap.set(".s4 .jt-head,.s4 .hv-card,.s4 .j-cta,.s4 .j-hint",{autoAlpha:0,y:40});
  gsap.set(".j-stage:not(.s1)",{autoAlpha:0});

  /* ===== المشهد 1: قهوة التركي (0 → 1) — الفيلم بيتندلق + زوم سينمائي ===== */
  function stageTurkish(){
    const t = gsap.timeline({defaults:{ease:"power2.out"}});
    t.fromTo(".s1 .j-lead-film",{scale:1},{scale:1,duration:.01},0)
     .to(".s1 .j-chip-product",{autoAlpha:1,y:0,duration:.09},.5);
    return t;
  }

  /* ===== المشهد 2: الكيك بتتركب (0 → 1) =====
     الطبق → القاعدة → الوسط → القبة → القمة — كل واحدة بتطع وتتقفل في مكانها */
  function stageCake(){
    const t = gsap.timeline({defaults:{ease:"power2.out"}});
    /* حركة كاميرا: زوم خفيف جدًا على المشهد */
    t.fromTo(".s2 .j-visual", {scale:1.03},{scale:1, duration:.95, ease:"power1.out"}, 0);
    /* الطبق الدهبي بيظهر */
    t.fromTo(".ck-b1-board", {autoAlpha:0, scale:.72, y:26},
                             {autoAlpha:1, scale:1, y:0, duration:.11, ease:"back.out(1.6)"}, .02);
    /* الشرايح بتطع واحدة ورا التانية وتتقفل في مكانها */
    t.fromTo(".ck-b2-base", {autoAlpha:0, y:-140, rotation:-3},
                            {autoAlpha:1, y:0, rotation:0, duration:.15, ease:"back.out(1.25)"}, .13)
     .fromTo(".ck-b3-mid", {autoAlpha:0, y:-170, rotation:3},
                           {autoAlpha:1, y:0, rotation:0, duration:.15, ease:"back.out(1.25)"}, .27)
     .fromTo(".ck-b4-dome", {autoAlpha:0, y:-200, rotation:-2},
                            {autoAlpha:1, y:0, rotation:0, duration:.17, ease:"back.out(1.2)"}, .41);
    /* القمة (جواناش + رولات) بتنزل آخر حاجة بنعومة */
    t.fromTo(".ck-b5-deco", {autoAlpha:0, y:-110, scale:1.12},
                            {autoAlpha:1, y:0, scale:1, duration:.18, ease:"power3.out"}, .57);
    /* اللمسة: الكيكة المكتملة تاخد نفس — إحساس أنها استقرت */
    t.to(".s2 .ck-stage", {scale:1.035, duration:.15, ease:"sine.inOut"}, .75)
     .to(".s2 .ck-stage", {scale:1, duration:.13, ease:"sine.inOut"}, .90)
     .to(".s2 .j-chip-product", {autoAlpha:1, y:0, duration:.09}, .80);
    return t;
  }

  /* ===== المشهد 3: الآيس كوفي (0 → 1) — الفيديو بيتحرك بالأسكرول ===== */
  function stageIced(){
    const t = gsap.timeline({defaults:{ease:"power2.out"}});
    t.fromTo(".s3 .j-scrub-film",{scale:1},{scale:1,duration:.01},0)
     .to(".s3 .j-chip-product",{autoAlpha:1,y:0,duration:.09},.8);
    return t;
  }

  /* ===== المشهد 4: المنيو (0 → 1) ===== */
  function stageMenu(){
    const t = gsap.timeline({defaults:{ease:"power2.out"}});
    t.fromTo(".s4 .jt-head",{autoAlpha:0,y:44},{autoAlpha:1,y:0,duration:.12},.05)
     .fromTo(".s4 .hv-card",{autoAlpha:0,y:60,rotation:i=>i%2 ? 3 : -3},
                            {autoAlpha:1,y:0,rotation:0,stagger:.10,duration:.13,ease:"back.out(1.4)"},.18)
     .fromTo(".s4 .j-cta",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.10},.52)
     .fromTo(".s4 .j-hint",{autoAlpha:0},{autoAlpha:1,duration:.08},.68);
    return t;
  }

  /* ===== الماستر تايم لاين: كل مشهد = وحدة زمنية ===== */
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:journey, pin:true, scrub:1,
      start:"top 72px", end:"+=3600",
      invalidateOnRefresh:true,
      onToggle:self => journey.classList.toggle("j-live", self.isActive),
      onUpdate:self => paint(self.progress)
    }
  });
  tl.add(stageTurkish(), 0)
    .add(stageCake(),    1)
    .add(stageIced(),    2)
    .add(stageMenu(),    3);

  /* انتقالات بين المشاهد (crossfade + حركة خفيفة) */
  tl.to(".s1",{autoAlpha:0,y:-46,scale:.965,duration:.12,ease:"power2.in"},.92)
    .fromTo(".s2",{autoAlpha:0,y:56,scale:.965},{autoAlpha:1,y:0,scale:1,duration:.14},1.0)
    .to(".s2",{autoAlpha:0,y:-46,scale:.965,duration:.12,ease:"power2.in"},1.92)
    .fromTo(".s3",{autoAlpha:0,y:56,scale:.965},{autoAlpha:1,y:0,scale:1,duration:.14},2.0)
    .to(".s3",{autoAlpha:0,y:-46,scale:.965,duration:.12,ease:"power2.in"},2.92)
    .fromTo(".s4",{autoAlpha:0,y:56},{autoAlpha:1,y:0,duration:.16},3.0)
    /* تثبيت المدة الكلية على 4 وحدات بالظبط — عشان توقيت آخر مشهد ميتعوجش */
    .set({}, {}, 4);

  /* واجهة التقدم: البار الفوق + الريل + تفعيل الأفلام */
  const stages = $$(".j-stage");
  const dots   = $$(".j-dots b");
  const jFill  = $("#jFill"), jRailFill = $("#jRail");
  const jPct   = $("#jPct"), jPctRail = $("#jPctRail"), jName = $("#jStageName");
  const NAMES  = ["القهوة التركي","الكيك","الآيس كوفي","المنيو"];
  const FILMS  = {0:"turkish"};
  let cur = -1;
  function paint(p){
    const pc = Math.round(p*100)+"%";
    jFill.style.width = pc; jRailFill.style.height = pc;
    jPct.textContent = pc; jPctRail.textContent = pc;
    const idx = Math.min(3, Math.floor(p*4));
    /* فيلم الآيس: بيتحرك مع السكرول جوه مشهده */
    const onIce = (idx === 2);
    if(onIce){
      const sub = Math.min(1, Math.max(0, p*4-2));
      iceTarget = ICE_IN + (ICE_OUT - ICE_IN) * sub;
      iceUserMoved = performance.now();   /* المستخدم بيسكرول → نوقف الدوران التلقائي */
      setIceActive(true);
    }
    if(idx !== cur){
      cur = idx;
      stages.forEach((s,i)=> s.classList.toggle("live", i===idx));
      dots.forEach((d,i)=> d.classList.toggle("on", i<=idx));
      jName.textContent = NAMES[idx];
      driveFilm(FILMS[idx] || null);
    }
    /* نضمن إن حالة فيلم الآيس دايمًا صح */
    setIceActive(onIce);
  }
  paint(0);
  /* تشغيل فيلم المشهد الأول صراحةً (لأن العناوين بتظهر بالأسكرول مش بتلقائي) */
  driveFilm("turkish");

  /* لو الفيديو وقف لوحده (متصفح/طاقة)، نرجّعه يشتغل وهو في مشهده */
  setInterval(()=>{
    if(document.hidden || !filmOn) return;
    const v = films[filmOn];
    if(v && v.paused && !v.ended) v.play().catch(()=>{});
  }, 2000);

  /* لما التاب يرجع، أعيد تزامن الأفلام مع المشهد الحالي */
  document.addEventListener("visibilitychange", ()=>{
    if(!document.hidden){
      if(filmOn){ const v = films[filmOn]; if(v && v.paused) v.play().catch(()=>{}); }
      else driveFilm(FILMS[cur] || null);
    }
  });
})();
