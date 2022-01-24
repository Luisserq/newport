const mobile = document.querySelector(".menu-toggle");
const menuLinks = document.querySelector(".menu");

mobile.addEventListener("click", function (){
    mobile.classList.toggle("is-active");
    menuLinks.classList.toggle("active");
});