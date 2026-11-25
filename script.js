const MENU = [
  // قهوة سخنة
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة تركي", price:25},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة تركي دبل", price:40},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة فرنساوي", price:45},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة بندق قطع", price:45},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة شيكولاتة", price:45},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة كراميل", price:50},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة فانيليا", price:45},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة لوتس", price:50},
  {cat:"hot", catAr:"قهوة سخنة", name:"قهوة نوتيلا", price:45},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"شاي", price:20},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"شاي أخضر", price:20},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"شاي نكهات", price:25},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"شاي كرك", price:30},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"ينسون", price:20},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"كوكتيل أعشاب", price:50},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"سحلب", price:50},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"هوت سيدر", price:45},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"هوت أوريو", price:45},
  {cat:"hot", catAr:"مشروبات ساخنة", name:"هوت شوكليت", price:45},
  // اسبيشيال
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"اسبريسو سنجل", price:30},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"اسبريسو دبل", price:40},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"ميكاتو", price:50},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"لاتيه", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"كابتشينو", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"ماتشا لاتيه", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"سبانش لاتيه", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"كورتادو", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"فلات وايت", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"أمريكانو", price:45},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"اسبريسو أفوجاتو", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"نسكافيه", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"موكا", price:60},
  {cat:"espresso", catAr:"قهوة اسبيشيال", name:"وايت موكا", price:60},
  // آيس كوفي
  {cat:"ice", catAr:"آيس كوفي", name:"آيس لاتيه", price:60},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس كابتشينو", price:60},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس كراميل ميكاتو", price:65},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس ماتشا لاتيه", desc:"بلوبيري - ستروبري", price:75},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس سبانش لاتيه", price:70, hot:true},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس بلو سبانش لاتيه", price:75},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس موكا", price:65},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس وايت موكا", price:70},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس موكا ستروبري", price:75},
  {cat:"ice", catAr:"آيس كوفي", name:"آيس سوليد كراميل", price:75},
  // فرابيه
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه كلاسيك", price:70},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه كراميل", price:85},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه لوتس", price:85, hot:true},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه بيستاشيو", price:85, hot:true},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه نوتيلا", price:85},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه وايت موكا", price:85},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه موكا", price:85},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه سوليد كراميل", price:85},
  {cat:"frappe", catAr:"فرابيه", name:"فرابيه سبانش لاتيه", price:85},
  // كوكتيل وصودا
  {cat:"cocktail", catAr:"كوكتيل", name:"موز باللبن", price:55},
  {cat:"cocktail", catAr:"كوكتيل", name:"مانجا كيوي", price:65},
  {cat:"cocktail", catAr:"كوكتيل", name:"فراوله موز", price:65},
  {cat:"cocktail", catAr:"كوكتيل", name:"جوافه باللبن", price:60},
  {cat:"cocktail", catAr:"كوكتيل", name:"فراوله باللبن", price:60},
  {cat:"cocktail", catAr:"كوكتيل", name:"كريمي مانجو", price:75},
  {cat:"cocktail", catAr:"كوكتيل", name:"كريمي توت", price:75},
  {cat:"cocktail", catAr:"كوكتيل", name:"كريمي فراوله", price:75},
  {cat:"cocktail", catAr:"صودا", name:"صودا كلاسيك", price:60},
  {cat:"cocktail", catAr:"صودا", name:"صودا فراوله", price:75},
  {cat:"cocktail", catAr:"صودا", name:"بلو بيري صودا", price:75},
  {cat:"cocktail", catAr:"صودا", name:"ميكس بيري صودا", price:75},
  {cat:"cocktail", catAr:"صودا", name:"شيري كولا", price:75},
  {cat:"cocktail", catAr:"صودا", name:"جرين ابل", price:75},
  {cat:"cocktail", catAr:"صودا", name:"جرين أوشن", price:70},
  {cat:"cocktail", catAr:"صودا", name:"باينابول باشون فروت", price:75},
  {cat:"cocktail", catAr:"صودا", name:"صن شاين", price:80},
  {cat:"cocktail", catAr:"صودا", name:"صن رايز", price:75},
  {cat:"cocktail", catAr:"صودا", name:"ريد بول ميكس", price:100},
  {cat:"cocktail", catAr:"زبادي", name:"زبادي ساده", price:50},
  {cat:"cocktail", catAr:"زبادي", name:"زبادي فواكه", price:60},
  {cat:"cocktail", catAr:"زبادي", name:"زبادي توت", price:60},
  // عصاير
  {cat:"juice", catAr:"عصاير فريش", name:"مانجو فريش", price:55},
  {cat:"juice", catAr:"عصاير فريش", name:"فروله فريش", price:55},
  {cat:"juice", catAr:"عصاير فريش", name:"جوافه فريش", price:55},
  {cat:"juice", catAr:"عصاير فريش", name:"ليمون", price:50},
  {cat:"juice", catAr:"عصاير فريش", name:"كيوي", price:70},
  {cat:"juice", catAr:"عصاير فريش", name:"ليمون بالنعناع", price:55},
  {cat:"juice", catAr:"عصاير فريش", name:"أفوكادو", price:85},
  {cat:"juice", catAr:"عصاير فريش", name:"أفوكادو مكسرات", price:100},
  // ميلك شيك
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك فانيليا", price:70},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك شوكليت", price:70},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك مانجو", price:70},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك فروله", price:70},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك بلو بيري", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك أوريو", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك ميكس بيري", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك نوتيلا", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك كيندر", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك كيت كات", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك لوتس", price:80, hot:true},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك بيستاشيو", price:80},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك جلاكسي", price:75},
  {cat:"shake", catAr:"ميلك شيك", name:"ميلك شيك كراميل", price:75},
  // سموزي
  {cat:"smoothie", catAr:"سموزي", name:"سموزي فراوله", price:60},
  {cat:"smoothie", catAr:"سموزي", name:"سموزي مانجو", price:60},
  {cat:"smoothie", catAr:"سموزي", name:"سموزي كيوي", price:70},
  {cat:"smoothie", catAr:"سموزي", name:"سموزي بلو بيري", price:70},
  {cat:"smoothie", catAr:"سموزي", name:"سموزي جرين ابل", price:70},
  {cat:"smoothie", catAr:"سموزي", name:"ليمون نعناع سموزي", price:60},
  {cat:"smoothie", catAr:"سموزي", name:"باينابول باشون", price:70},
  {cat:"smoothie", catAr:"سموزي", name:"ميكس بيري", price:70},
  {cat:"smoothie", catAr:"سموزي", name:"بطيخ", price:60},
  {cat:"smoothie", catAr:"إضافات", name:"إضافة بوبا", price:15},
  {cat:"smoothie", catAr:"إضافات", name:"إضافة فليفر", price:15},
  // ديزرت
  {cat:"dessert", catAr:"ديزرت", name:"ميني فلوتس", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"ريد فيلفت", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"ميني روشيه", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"فادج شوكليت", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"تراميسو", desc:"شوكليت - توت - كندر - بيستاشيو", price:70},
  {cat:"dessert", catAr:"ديزرت", name:"تراميسو بيستاشيو", price:75},
  {cat:"dessert", catAr:"ديزرت", name:"تشيز كيك", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"ميني نوتيلا بندق", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"دونتس", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"مولتن كيك", price:80, hot:true},
  {cat:"dessert", catAr:"ديزرت", name:"وافل", desc:"شوكليت - وايت شوكليت - كندر", price:60},
  {cat:"dessert", catAr:"ديزرت", name:"وافل بيستاشيو", price:80},
  {cat:"dessert", catAr:"ديزرت", name:"وافل لوتس", price:80, hot:true},
  // سوفت
  {cat:"soft", catAr:"سوفت درينك", name:"مياه", price:10},
  {cat:"soft", catAr:"سوفت درينك", name:"بيبسي", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"فيروز", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"ميرندا", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"تويست", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"شوبيس", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"سفن", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"بريل", price:30},
  {cat:"soft", catAr:"سوفت درينك", name:"ريدبول", price:75},
  // بن
  {cat:"beans", catAr:"البن", name:"توليفة كلاسيك - سادة (تمن)", price:70},
  {cat:"beans", catAr:"البن", name:"توليفة كلاسيك - محوج (تمن)", price:75},
  {cat:"beans", catAr:"البن", name:"شرقي سادة فاتح (تمن)", price:80},
  {cat:"beans", catAr:"البن", name:"عبدو باشا سادة وسط (تمن)", price:115},
  {cat:"beans", catAr:"البن", name:"عبدو باشا محوج وسط (تمن)", price:125},
  {cat:"beans", catAr:"البن", name:"العميد سادة (تمن)", price:140},
  {cat:"beans", catAr:"البن", name:"بن فرنساوي (تمن)", price:100},
  {cat:"beans", catAr:"البن", name:"بن بندق قطع (تمن)", price:110},
];

let activeCat = "all";
let query = "";
let cart = {};
try { cart = JSON.parse(localStorage.getItem("basha_cart")||"{}"); } catch(e){ cart = {}; }

/* رقم التذكرة: ثابت طول اليوم لكل عميل + وقت آخر تحديث */
const orderNo = (() => {
  const d = new Date().toDateString();
  let n = +(localStorage.getItem("basha_order_no") || 0);
  if(localStorage.getItem("basha_order_day") !== d){ n = 0; localStorage.setItem("basha_order_day", d); }
  if(!n){ n = 100 + Math.floor(Math.random()*899); localStorage.setItem("basha_order_no", n); }
  return n;
})();

/* صور الفئات — احتياطي لما ميبقى فيهش صورة خاصة بالمنتج نفسه */
const CAT_MEDIA = {
  hot:      {src:"cafe-hero/menu/cat-hot.jpg",      fit:"cover"},
  espresso: {src:"cafe-hero/menu/cat-espresso.jpg", fit:"cover"},
  ice:      {src:"cafe-hero/menu/cat-ice.png",      fit:"contain"},
  frappe:   {src:"cafe-hero/menu/cat-ice.png",      fit:"contain"},
  cocktail: {icon:"fa-champagne-glasses"},
  juice:    {icon:"fa-lemon"},
  shake:    {icon:"fa-milkshake"},
  smoothie: {icon:"fa-blender"},
  dessert:  {src:"cafe-hero/menu/cat-dessert.png",  fit:"contain"},
  soft:     {icon:"fa-glass-water"},
  beans:    {src:"cafe-hero/menu/cat-beans.png",    fit:"cover"},
};
/* صور منتجات معينة (من menu-images.js) */
const PRODUCT_IMAGES = window.MENU_IMAGES || {};

const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartCountEl = document.getElementById("cartCount");
function renderMenu(){
  buildShelves();
  applyShelfFilter();
}

/* بناء أرفف المنيو: كل فئة رف خشب والمنتجات واقفة عليه */
function buildShelves(){
  const shelvesEl = document.getElementById("shelves");
  if(!shelvesEl) return;
  const by = {};
  MENU.forEach(it => {
    if(!by[it.cat]) by[it.cat] = {catAr: it.catAr, items: []};
    by[it.cat].items.push(it);
  });
  shelvesEl.innerHTML = Object.keys(by).map(cat => {
    const g = by[cat];
    const prods = g.items.map(it => {
      const im = PRODUCT_IMAGES[it.name]
        ? `<img loading="lazy" src="${PRODUCT_IMAGES[it.name]}" alt="${it.name}">`
        : `<div class="prod-icon"><i class="fa-solid fa-mug-hot"></i></div>`;
      return `
      <div class="prod" data-name="${it.name}">
        ${im}
        <b>${it.name}</b>
        <span class="prc">${it.price}ج</span>
        <button class="add" aria-label="ضيف ${it.name}" data-name="${it.name}" data-price="${it.price}">+</button>
      </div>`;
    }).join("");
    return `
    <div class="shelf" data-cat="${cat}">
      <div class="shelf-head"><b>${g.catAr}</b><small>اسحب لشمال ←</small></div>
      <div class="rail">${prods}</div>
      <div class="wood"></div>
    </div>`;
  }).join("");
}

/* فلتر الفئة + البحث: المطابق يظل، والباقي يتشادر */
function applyShelfFilter(){
  const shelvesEl = document.getElementById("shelves");
  if(!shelvesEl) return;
  let any = false, matches = 0, firstMatch = null;
  shelvesEl.querySelectorAll(".shelf").forEach(sh => {
    /* لو فيه بحث: ندوّر في كل المنيو (نتجاهل الفلتر) — أسهل للمستخدم */
    const catOk = query ? true : (activeCat === "all" || activeCat === sh.dataset.cat);
    let vis = 0;
    sh.querySelectorAll(".prod").forEach(pr => {
      const ok = catOk && (!query || (pr.dataset.name || "").includes(query));
      pr.classList.toggle("dim", !ok);
      if(ok){ vis++; matches++; if(!firstMatch) firstMatch = pr; }
    });
    const hide = !catOk || (query && vis === 0);
    sh.classList.toggle("hide", hide);
    if(!hide) any = true;
  });
  /* لو فيه بحث وانطلقنا لتحت: ننزّل لأول نتيجة */
  if(query && firstMatch) firstMatch.scrollIntoView({behavior:"smooth", block:"center"});
  /* لو البحث مالاقاش نتيجة والفلتر شغال: نجرب في كل المنيو تلقائيًا */
  if(query && matches === 0 && activeCat !== "all"){
    activeCat = "all";
    document.querySelectorAll(".cat-pill").forEach(p=>p.classList.toggle("active", p.dataset.cat === "all"));
    return applyShelfFilter();   /* نعيد الفحص بالفلتر الملغي */
  }
  document.getElementById("noResults")?.classList.toggle("show", !any);
  /* عدّاد نتائج البحث */
  const cnt = document.getElementById("searchCount");
  if(cnt){
    cnt.textContent = query ? (matches ? "لقينا " + matches + " نتيجة" : "مفيش نتايج — جرّب كلمة تانية") : "";
    cnt.classList.toggle("show", !!query);
  }
}

/* ===== عروض الباشا: كل عرض مجموعة منتجات بسعر واحد =====
   deals = قائمة المنتجات اللي بتتحط في السلة مع بعض | price = سعر العرض */
const OFFERS = [
  {
    title:"عرض الآيس + ديزرت", tag:"وفّر ٣٠ ج", price:110, was:140,
    items:[["آيس سبانش لاتيه",2],["فادج شوكليت",1]]
  },
  {
    title:"٣ آيس لاتيه", tag:"وفّر ٨٠ ج", price:100, was:180,
    items:[["آيس لاتيه",3]]
  },
  {
    title:"عرض السبانش", tag:"وفّر ٢٠ ج", price:120, was:140,
    items:[["آيس بلو سبانش لاتيه",2]]
  },
  {
    title:"قطعة ديزرت", tag:"عرض اليوم", price:50, was:80,
    items:[["تشيز كيك",1]]
  },
  {
    title:"٣ وافل", tag:"وفّر ٤٠ ج", price:100, was:140,
    items:[["وافل",3]]
  },
  {
    title:"موهيتو", tag:"منعش", price:40, was:60,
    items:[["ليمون بالنعناع",1]]
  },
];

/* سبورة عروض الباشا: لوحات بتدور بالممحاة — أول لوحة عرض الأسبوع */
const CH_BOARDS = [
  {
    title:"عرض الأسبوع", day:"وفّر ٣٠ ج",
    offer:{ label:"٢ آيس سبانش + فادج شوكليت", price:110, was:140 },
    items:[["آيس سبانش لاتيه",2],["فادج شوكليت",1]]
  },
  {title:"منيو الباشا", day:"الأكثر طلباً", items: MENU.filter(m=>m.hot).slice(0,4)},
  {title:"قهوة الصبح", day:"سخنة على الرمل", items: ["قهوة تركي","قهوة فرنساوي","سحلب","هوت شوكليت"].map(n=>MENU.find(m=>m.name===n)).filter(Boolean)},
  {
    title:"عرض القعدة", day:"وفّر ٤٠ ج",
    offer:{ label:"٣ آيس لاتيه منعنش", price:100, was:180 },
    items:[["آيس لاتيه",3]]
  },
  {title:"حلويات الباشا", day:"طازة كل يوم", items: MENU.filter(m=>m.cat==="dessert").slice(0,4)},
];

/* سطر عادي على السبورة */
function chalkRow(m){
  return `<div class="b-item"><span class="nm">${m.name}</span>${m.hot?'<span class="tag">الأكثر طلباً</span>':''}<span class="dots"></span><span class="pr">${m.price}ج</span><button class="add" data-name="${m.name}" data-price="${m.price}" aria-label="ضيف ${m.name}">+</button></div>`;
}

/* سطر عرض: الاسم + السعر القديم مشطوب + السعر الجديد + زرار يضيف المجموعة كلها */
function offerRow(b){
  const o = b.offer;
  const data = encodeURIComponent(JSON.stringify({items:b.items, price:o.price, label:o.label}));
  return `<div class="b-item b-offer">
    <span class="nm">${o.label}</span>
    <span class="was">${o.was}ج</span>
    <span class="pr">${o.price}ج</span>
    <button class="offer-add" data-offer="${data}" aria-label="ضيف ${o.label}">ضيف العرض</button>
  </div>`;
}

let chIdx = 0;
function chalkNext(){
  const chEl = document.getElementById("chalkboard");
  if(!chEl) return;
  chIdx = (chIdx+1) % CH_BOARDS.length;
  chEl.classList.add("wiping");
  setTimeout(()=>{
    const b = CH_BOARDS[chIdx];
    document.getElementById("chTitle").textContent = b.title;
    document.getElementById("chDay").textContent = b.day;
    document.getElementById("chItems").innerHTML =
      (b.offer ? offerRow(b) : "")
      + (b.items || []).map(it => Array.isArray(it) ? offerLine(it) : chalkRow(it)).join("");
    chEl.classList.remove("wiping");
    chEl.classList.add("rewriting");
    setTimeout(()=> chEl.classList.remove("rewriting"), 700);
  }, 950);
}

/* سطر منتج داخل لوحة عرض (بدون زرار + — الزرار على سطر العرض) */
function offerLine([name, qty]){
  const m = MENU.find(x => x.name === name);
  if(!m) return "";
  return `<div class="b-item b-sub"><span class="nm">${m.name}</span><span class="count">× ${toAr(qty)}</span><span class="dots"></span><span class="pr">${m.price}ج</span></div>`;
}

function saveCart(){
  try{ localStorage.setItem("basha_cart", JSON.stringify(cart)); }
  catch(e){ console.warn("[cart] تعذّر الحفظ (التخزين ممتلئ أو موقوف)"); }
}
function cartQty(){ return Object.values(cart).reduce((a,b)=>a+b.qty,0); }
function cartSum(){ return Object.values(cart).reduce((a,b)=>a+b.qty*b.price,0); }

/* أرقام عربية للأوردر */
const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
const toAr = n => String(n).replace(/\d/g, d => AR_DIGITS[+d]);

function renderCart(){
  if(!cartItemsEl) return;
  const keys = Object.keys(cart);
  cartItemsEl.innerHTML = keys.length ? keys.map(k=>{
    const it = cart[k];
    return `<div class="c-item">
      <div class="ci-info"><strong>${it.name}</strong><span class="ci-price">${it.price} ج × ${it.qty} = ${it.price*it.qty} ج</span></div>
      <div class="qty"><button data-act="dec" data-k="${k}" aria-label="أقل">−</button><span>${it.qty}</span><button data-act="inc" data-k="${k}" aria-label="أكتر">+</button></div>
    </div>`;
  }).join("") : `<div class="c-empty"><i class="fa-solid fa-mug-hot"></i>سلتك فاضية لسه ..<br>اختار من المنيو ☕</div>`;
  cartTotalEl.textContent = cartSum()+" ج";
  cartCountEl.textContent = cartQty();
  /* التنبيه اللي على زرار الكارت */
  document.getElementById("tkOrderNo") && (document.getElementById("tkOrderNo").textContent = "أوردر رقم " + toAr(orderNo));
  const tk = document.getElementById("ticket");
  if(tk) tk.classList.toggle("stamped", keys.length > 0);
}

function addToCart(name, price){
  price = Number(price);
  if(!cart[name]) cart[name] = {name, price, qty:0};
  cart[name].qty++;
  saveCart(); renderCart();
  stampTime();
  openCart();
}

/* تنسيق الوقت بالعربي — مستخدم في التذكرة ورسالة الواتساب */
function arTime(d){
  d = d || new Date();
  let h = d.getHours(), m = d.getMinutes();
  const ap = h < 12 ? "ص" : "م";
  h = h % 12 || 12;
  return toAr(h) + ":" + toAr(String(m).padStart(2,"0")) + " " + ap;
}
function stampTime(){
  const el = document.getElementById("tkTime");
  if(el) el.textContent = arTime();
}

function openCart(){ document.getElementById("cartDrawer").classList.add("open"); document.getElementById("overlay").classList.add("show"); }
function closeCartFn(){ document.getElementById("cartDrawer").classList.remove("open"); document.getElementById("overlay").classList.remove("show"); }

document.addEventListener("click", e=>{
  const b = e.target.closest(".add");
  if(b){ addToCart(b.dataset.name, b.dataset.price); return; }
  const q = e.target.closest("[data-act]");
  if(q){
    const k = q.dataset.k, act = q.dataset.act;
    if(!cart[k]) return;
    if(act==="inc") cart[k].qty++;
    if(act==="dec"){ cart[k].qty--; if(cart[k].qty<=0) delete cart[k]; }
    saveCart(); renderCart(); return;
  }
  const pill = e.target.closest(".cat-pill");
  if(pill){
    document.querySelectorAll(".cat-pill").forEach(p=>p.classList.remove("active"));
    pill.classList.add("active");
    activeCat = pill.dataset.cat;
    query = "";
    const s = document.getElementById("search"); if(s) s.value = "";
    applyShelfFilter();
    goToMenu();
    return;
  }
  /* زرار "ضيف العرض": يضيف كل منتجات العرض بضغطة، والسعر يتحسب بسعر العرض بالظبط */
  const off = e.target.closest(".offer-add");
  if(off){
    try{
      const o = JSON.parse(decodeURIComponent(off.dataset.offer));
      o.items.forEach(([name, qty]) => {
        const m = MENU.find(x => x.name === name);
        if(!m) return;
        cart[o.label + " — " + name] = {name: o.label + " — " + name, price: Number(m.price), qty};
      });
      /* سطر واحد بإجمالي العرض عشان الحساب يطلع مضبوط */
      cart["🎁 " + o.label] = {name: "🎁 " + o.label, price: -offerDiscount(o), qty: 1};
      saveCart(); renderCart(); stampTime(); openCart();
      off.textContent = "✓ اتضاف";
      setTimeout(()=> off.textContent = "ضيف العرض", 1400);
    }catch(err){ console.warn("[offer]", err); }
  }
});

/* فرق الخصم: (مجموع سعر المنتجات) − سعر العرض */
function offerDiscount(o){
  const full = o.items.reduce((sum,[name,qty]) => {
    const m = MENU.find(x => x.name === name);
    return sum + (m ? Number(m.price) * qty : 0);
  }, 0);
  return full - Number(o.price);
}

document.getElementById("search")?.addEventListener("input", e=>{
  query = e.target.value.trim();
  /* البحث بيلغي فلتر الفئة تلقائيًا — المستخدم عايز يدوّر في كل المنيو */
  if(query && activeCat !== "all"){
    activeCat = "all";
    document.querySelectorAll(".cat-pill").forEach(p=>p.classList.toggle("active", p.dataset.cat === "all"));
  }
  applyShelfFilter();
});

/* سبورة العروض: أول لوحة = عرض الأسبوع */
(function(){
  const itemsEl = document.getElementById("chItems");
  const nextBtn = document.getElementById("chNext");
  if(!itemsEl || !nextBtn) return;
  const b = CH_BOARDS[0];
  itemsEl.innerHTML =
    (b.offer ? offerRow(b) : "")
    + (b.items || []).map(it => Array.isArray(it) ? offerLine(it) : chalkRow(it)).join("");
  nextBtn.addEventListener("click", chalkNext);
})();
document.getElementById("cartBtn")?.addEventListener("click", openCart);
document.getElementById("closeCart")?.addEventListener("click", closeCartFn);
document.getElementById("overlay")?.addEventListener("click", closeCartFn);
document.getElementById("clearCart")?.addEventListener("click", ()=>{ cart={}; saveCart(); renderCart(); });
document.getElementById("sendWA")?.addEventListener("click", ()=>{
  const keys = Object.keys(cart);
  if(!keys.length){ alert("اختار حاجة من المنيو الأول"); return; }
  const timeStr = arTime();
  const cfg = window.BASHA_CONFIG || {};
  let msg = "✦ " + (cfg.name || "بن عبدو باشا") + " — COFFEE SHOP ✦%0A";
  msg += `تذكرة رقم ${toAr(orderNo)} • ${timeStr}%0A`;
  msg += "------------------------%0A";
  keys.forEach(k=>{ const it=cart[k]; msg += `${it.name} × ${it.qty} = ${it.qty*it.price} ج%0A`; });
  msg += "------------------------%0A";
  msg += `الإجمالي: ${cartSum()} ج ✅%0A`;
  msg += "———————————————%0A";
  msg += "مستنيين تأكيد حضرتك 🙏";
  const wa = (window.BASHA_CONFIG && window.BASHA_CONFIG.whatsapp) || "201000000000";
  window.open("https://wa.me/"+wa+"?text="+msg, "_blank", "noopener");
});

// burger
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");
burger?.addEventListener("click", ()=>{
  const open = mobileMenu.classList.toggle("open");
  burger.setAttribute("aria-expanded", open ? "true" : "false");
});
mobileMenu?.querySelectorAll("a").forEach(a=>a.addEventListener("click", ()=>{
  mobileMenu.classList.remove("open");
  burger?.setAttribute("aria-expanded", "false");
}));

/* ===== التنقل لقسم المنيو (يشتغل مع/بدون Lenis) ===== */
function goToMenu(){
  const el = document.getElementById("shelves") || document.getElementById("menu");
  if(!el) return;
  /* نستخدم Lenis لو موجودة (بيتم تعريفها في hero-journey.js بعدنا) */
  setTimeout(()=>{
    if(window.__lenis) window.__lenis.scrollTo(el, {offset:-70, duration:1.1});
    else el.scrollIntoView({behavior:"smooth", block:"start"});
  }, 60);
}

/* ===== توحيد الأسعار: كل الأسعار المعروضة بتتسحب من MENU (مصدر واحد) ===== */
(function(){
  const find = name => MENU.find(m => m.name === name) || MENU.find(m => m.name.includes(name));
  /* كروت المنتجات المعروضة */
  document.querySelectorAll("[data-basha-price]").forEach(el => {
    const m = find(el.dataset.bashaPrice);
    if(m){ el.textContent = m.price + " EGP"; el.closest(".hv-card")?.querySelector(".add")?.setAttribute("data-price", m.price); }
  });
  /* قايمة الأكثر طلباً */
  document.querySelectorAll("[data-basha-li]").forEach((li, i) => {
    const m = find(li.dataset.bashaLi);
    if(m) li.textContent = (i+1) + ". " + m.name + " — " + m.price + " ج";
  });
})();

/* ===== تطبيق الإعدادات على اللينكات (رقم الواتساب والتليفون) ===== */
(function(){
  const cfg = window.BASHA_CONFIG;
  if(!cfg) return;
  const wa = "https://wa.me/" + cfg.whatsapp;
  document.querySelectorAll('a[href*="wa.me/"]').forEach(a => {
    const text = a.getAttribute("href").split("?text=")[1];
    a.href = wa + (text ? "?text=" + text : "");
  });
  document.querySelectorAll('a[href^="tel:"]').forEach(a => a.href = "tel:" + cfg.phoneTel);
  document.querySelectorAll("[data-phone]").forEach(el => el.textContent = cfg.phone);
})();

/* شاشة البداية: بتختمل أول ما فيلم القهوة يبقى جاهز (أو بعد حد أقصى) — مش مستنية كل حاجة */
(function(){
  const pl = document.getElementById("preloader");
  if(!pl) return;
  const t0 = performance.now();
  let hidden = false;
  const hide = () => {
    if(hidden) return; hidden = true;
    pl.classList.add("hide");
    setTimeout(()=> pl.remove(), 900);
  };
  const bar = pl.querySelector(".pl-bar i");
  const tick = setInterval(()=>{ if(bar) bar.style.width = Math.min(92, (parseFloat(bar.style.width)||0) + 6 + Math.random()*7) + "%"; }, 200);
  const video = document.querySelector(".j-lead-film");
  const check = setInterval(()=>{
    const elapsed = performance.now() - t0;
    const ready = video && video.readyState >= 3;   // فيلم القهوة يقدر يشتغل
    if((ready && elapsed > 900) || elapsed > 3800){
      clearInterval(check); clearInterval(tick);
      if(bar) bar.style.width = "100%";
      setTimeout(hide, 280);
    }
  }, 130);
  setTimeout(hide, 5000); // أمان
})();

const sections = [...document.querySelectorAll("section[id]")];
const navLinks = [...document.querySelectorAll(".links a")];
const io = new IntersectionObserver(es=>{
  es.forEach(en=>{
    if(en.isIntersecting){
      navLinks.forEach(a=>a.classList.toggle("active", a.getAttribute("href")==="#"+en.target.id));
    }
  });
},{rootMargin:"-40% 0px -55% 0px"});
sections.forEach(s=>io.observe(s));

renderMenu();
renderCart();
stampTime();

