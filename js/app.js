// ===================== HEADER CODE START ======================
document.addEventListener("DOMContentLoaded", () => {

  document.body.classList.add("fade-in");
});

var header = document.getElementById("header");
if (header) {
  fetch("../header.html")
  .then((e) => e.text())
  .then((data) => {
    
    
    
    header.innerHTML = data;
    // ============== NAVBAR TOP SCROLL FIX CODE START =====================
    var navbar=document.getElementById("navbar")
    window.addEventListener("scroll",()=>{
      var window_srcoll=window.scrollY;

  
  if(window_srcoll > 900){
  navbar.classList.add("navfix")
}
else{
  navbar.classList.remove("navfix")
  
}
})


// ============== NAVBAR TOP SCROLL FIX CODE END =====================

// ============== THEME SET CODE START ======================
var theme=document.getElementById("theme");
var localtheme=localStorage.getItem("theme");


if(!localtheme){
  localStorage.setItem("theme","light")
  localtheme="light"
}
document.body.classList.add(localtheme)
theme.addEventListener("click",(e)=>{
  console.log(e);
  
e.preventDefault();

  if(localtheme === "light"){
    localtheme="dark";
        localStorage.setItem("theme", "dark");

  }
else if(localtheme === "dark"){
     localtheme="light";
      localStorage.setItem("theme", "light");


  }
   document.body.classList.remove("light", "dark");
  document.body.classList.add(localtheme);

theme.innerHTML = 
  localtheme === "dark"
    ? `<i class="fa-solid fa-sun"></i> `
    : `<i class="fa-regular fa-moon"></i> `;
})

// ============== THEME SET CODE END ========================



// ============== THEME1 SET CODE START ======================
var theme1=document.getElementById("theme1");
var localtheme=localStorage.getItem("theme");


if(!localtheme){
  localStorage.setItem("theme","light")
  localtheme="light"
}
document.body.classList.add(localtheme)
theme1.addEventListener("click",(e)=>{
  console.log(e);
  
e.preventDefault();

  if(localtheme === "light"){
    localtheme="dark";
        localStorage.setItem("theme", "dark");

  }
else if(localtheme === "dark"){
     localtheme="light";
      localStorage.setItem("theme", "light");


  }
   document.body.classList.remove("light", "dark");
  document.body.classList.add(localtheme);

theme1.innerHTML = 
  localtheme === "dark"
    ? `<i class="fa-solid fa-sun"></i> `
    : `<i class="fa-regular fa-moon"></i> `;
})

// ============== THEME 1 SET CODE END ========================
// =========== INFO CANVAS CODE START ========================
   const myCanvas = document.getElementById('myCanvas');
  const dot = document.getElementById('dot');

  // jab canvas open hoga
  myCanvas.addEventListener('shown.bs.offcanvas', (e) => {
    e.preventDefault()
    dot.classList.add("active");
  });

  // jab canvas band hoga
  myCanvas.addEventListener('hidden.bs.offcanvas', (e) => {
    e.preventDefault()
   
    dot.classList.remove("active");
  });
// =========== INFO CAVAS CODE END ==========================  
      });
    
}

// ===================== HEADER CODE END ======================


// ===================== FOOTER CODE START ======================
var footer=document.getElementById("footer");
if(footer){
// ===================== footer CODE START ======================
  fetch("../footer.html")
  .then(e=>e.text())
  .then((data)=>{
  footer.innerHTML=data})
}
// ===================== FOOTER CODE END ======================
document.addEventListener("DOMContentLoaded", function () {
  var service_section=document.getElementById("service_section");
  if(service_section){
  // sab card wrappers ko select karo
  const aiCard = document.querySelector(".ai_product");
  const grcCard = document.querySelector(".grc_product");
  const webCard = document.querySelector(".web_product");
  const cards = [aiCard, grcCard, webCard];

  // by default AI card show ho
  aiCard.classList.add("active");

  // helper function to show specific card
  function showCard(card) {
    if (card.classList.contains("active")) return; // already active
    cards.forEach(c => c.classList.remove("active")); // sabko inactive
    card.classList.add("active"); // naya active
  }

  // headings par event listeners
  document.querySelector(".ai_product_div h2")
    .addEventListener("mouseenter", () => showCard(aiCard));
  document.querySelector(".grc_product_div h2")
    .addEventListener("mouseenter", () => showCard(grcCard));
  document.querySelector(".web_product_div h2")
    .addEventListener("mouseenter", () => showCard(webCard));
}
});





// ================= LOADER CODE START ==================
var loader=document.getElementById("loader");
if(loader){
  
  fetch("../loader.html")
    .then(e=>e.text())
  .then((data)=>{

    loader.innerHTML=data
    // ==== LOADER REMOVE CODE START ==========
var loader_div=document.getElementById("loader_div");
document.body.style.overflow = "hidden"; 
document.body.classList.add("anim")
setTimeout(() => {
  
  loader_div.style.display="none";
  document.body.classList.add("anim")
  document.body.style.overflow = "visible"; 
}, 0);
 
    // ==== LOADER REMOVE CODE END ==========

})
}
// ================= LOADER CODE END ==================
document.addEventListener("DOMContentLoaded", function(){
  AOS.init();
});



// ==================== ai_product_partial CODE START ==================================
var ai_product_partial=document.getElementById("ai_product_partial");
if(ai_product_partial){
  fetch("../ai_product_partial.html")
  .then((E)=>E.text())
  .then(res=>{
    ai_product_partial.innerHTML=res;
  })
}
// ==================== ai_product_partial CODE END ================================







// ====================== grc_service_partial CODE START ================================

var grc_service_partial=document.getElementById("grc_service_partial");
if(grc_service_partial){
  fetch("../grc_service_partial.html")
  .then((E)=>E.text())
  .then(res=>{
    grc_service_partial.innerHTML=res;
  })
}
// ====================== grc_service_partial CODE END  ================================

// ====================== ai_driver_web_service_partial CODE END  ================================
var ai_driver_web_service_partial=document.getElementById("ai_driver_web_service_partial");
if(ai_driver_web_service_partial){
  fetch("../ai_driver_web_service_partial.html")
  .then((E)=>E.text())
  .then(res=>{
    ai_driver_web_service_partial.innerHTML=res;
  })
}
// ====================== ai_driver_web_service_partial CODE END  ================================


// ====================== client_partial CODE END  ================================
var client_partial=document.getElementById("client_partial");
if(client_partial){
  fetch("../client_partial.html")
  .then((E)=>E.text())
  .then(res=>{
    client_partial.innerHTML=res;
  })
}
// ====================== client_partial CODE END  ================================




// ====================== funfact CODE END  ================================
var funfact=document.getElementById("funfact");
if(funfact){
  fetch("../funfact.html")
  .then((E)=>E.text())
  .then(res=>{
    funfact.innerHTML=res;
  })
}
// ====================== funfact CODE END  ================================



// ============= IMAGE ANIMTION CODE START ===============
    window.addEventListener("scroll", () => {
      document.querySelectorAll(".image_of_card_serivce").forEach(img => {
        const rect = img.getBoundingClientRect();

        
        if (rect.top < window.innerHeight-200 && rect.bottom > 0) {
          img.classList.add("image_of_card_serivce_acive");
        } else {
          img.classList.remove("image_of_card_serivce_acive");
        }
      });
    });
// ============= IMAGE ANIMAYION CODE END ================