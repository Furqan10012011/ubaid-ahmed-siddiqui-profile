window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 2000);

});

// LOADER

window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    if(loader){

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 1800);

    }

});

// NAVBAR SCROLL EFFECT

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if(window.scrollY > 50){

        navbar.style.background =
        "rgba(7,17,31,0.92)";

        navbar.style.boxShadow =
        "0 10px 30px rgba(0,0,0,0.25)";

    }
    else{

        navbar.style.background =
        "rgba(7,17,31,0.55)";

        navbar.style.boxShadow = "none";

    }

});

// ACTIVE NAVIGATION

const currentPage =
window.location.pathname.split("/").pop();

const links =
document.querySelectorAll(".nav-links a");

links.forEach(link=>{

    const href = link.getAttribute("href");

    if(href === currentPage){

        link.style.color="#D4AF37";

    }

});



const menuToggle =
document.querySelector(".menu-toggle");

const navLinks =
document.querySelector(".nav-links");

if(menuToggle){

    menuToggle.addEventListener("click",()=>{

        navLinks.classList.toggle("active");

    });

}


const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});
