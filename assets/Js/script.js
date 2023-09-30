/*===================== NAV BAR ================*/

/*============ List Toggle ==============*/
let navLinks = document.getElementById("nav-links");
let closeIcon = document.querySelector(".closeIcon");
let listIcon = document.querySelector(".uil-align-justify");

closeIcon.addEventListener("click", function hideMenu() {
  navLinks.classList.remove("showNav");
});
listIcon.addEventListener("click", function showMenu() {
  navLinks.classList.add("showNav");
});

/*let aboutList = document.querySelectorAll(".asd")

aboutList.forEach(asd => {
    asd.addEventListener('click' , function(){
        aboutList.forEach(btn => {
            btn.classList.remove('active');
            this.classList.add('active');
            
        });
    })
});*/
