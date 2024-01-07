

const header = document.querySelector("#mainHeader");

 const sticky = header.offsetTop;

 console.log(sticky);

window.addEventListener("scroll",()=>{
  if (pageYOffset > sticky) {
    header.classList.add('stickyHeader');
  } else {
    header.classList.remove('stickyHeader');
  }
});
 
 
 
 
 
 /*==================== Swipper JS Slider JavaScript Code Start ===================== */

var swiper = new Swiper(".mySwiper", {
  autoplay: {
    delay: 3000,
  },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  /*==================== Swipper JS Slider JavaScript Code End ===================== */

  /*==================== SCroll To Top JavaScript Code Start ===================== */

// const scrollBtn = document.getElementById("scrollToTop");

// window.addEventListener("scroll",()=>{
//   if (window.pageYOffset > 400) {
//     scrollBtn.style.display="block";
//   } else {
//     scrollBtn.style.display="none";
//   }
  
// });
// window.addEventListener("click",()=>{
//   window.scrollTo({
//     top:0,
//     behavior:"smooth"
//   });
// })

  /*==================== SCroll To Top JavaScript Code End ===================== */



  