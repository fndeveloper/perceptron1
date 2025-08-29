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
      console.log(window_srcoll);
  
  if(window_srcoll > 500){
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
});

