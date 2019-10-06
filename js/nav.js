/* jQuery for the navigation animation */

$("#wrapper").click( function() {
	$(".menu").toggleClass("close");
});

/* Code for the toggling of the navbar */

/* Code for the toggling of the navbar */

let toggleNavStatus = false;

let toggleNav = function () {
    let getSidebar = document.querySelector(".side-nav");
    let getSidebarUL = document.querySelector(".side-nav ul");
    let getSidebarLinks = document.querySelectorAll(".side-nav a");

    if (toggleNavStatus === false) {
        getSidebarUL.style.visibility = "visible";
        getSidebar.style.visibility = "visible";

         getSidebarLinks.forEach((item, index)=>{
          console.log(item);
          item.style.opacity = "1";
         })
        getSidebar.style.height = "220px";

        toggleNavStatus = true;
    } 

    else if (toggleNavStatus === true) {
        getSidebarUL.style.visibility = "hidden";

         getSidebarLinks.forEach((item, index)=>{
          item.style.opacity = "0";
         })
        getSidebar.style.height = "0";

        toggleNavStatus = false;
    }
}
