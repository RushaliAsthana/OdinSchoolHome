$(document).ready(function () {
 $(".nav-toggler").each(function (_, navToggler) {
   var target = $(navToggler).data("target");
   $(navToggler).on("click", function () {
     $(target).animate({
       height: "toggle",
     });
   });
 });
});


window.addEventListener('DOMContentLoaded', ()=> {
    const menuBtn = document.querySelector('#menu-btn')
    const dropdown = document.querySelector('#dropdown')
    
    menuBtn.addEventListener('click', () => {
        /* if(dropdown.classList.contains('hidden')){
            dropdown.classList.remove('hidden');
            dropdown.classList.add('flex');
        }else{
            dropdown.classList.remove('flex')
            dropdown.classList.add('hidden')
        } */

        dropdown.classList.toggle('hidden')
        dropdown.classList.toggle('flex')
    })

})
