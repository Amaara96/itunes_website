// $(function() {
// 	menu = $('nav ul');

//   $('#openup').on('click', function(e) {
//     e.preventDefault(); menu.slideToggle();
//   });
  
//   $(window).resize(function(){
//     var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
//       menu.removeAttr('style');
//     }
//   });
  
//   $('nav li').on('click', function(e) {                
//     var w = $(window).width(); if(w < 480 ) {
//       menu.slideToggle(); 
//     }
//   });
//   $('.open-menu').height($(window).height());
// });

let btn = document.querySelector("#btn")
let text = document.querySelector("#text")
btn.addEventListener('click', ()=> {
  text.classList.toggle("none")
  text.classList.toggle("display")
})


