const reveals =
document.querySelectorAll(
".stat-card,.edu-card,.skill-card,.timeline-card,.impact-card,.contact-card,.philosophy-card"
);

function revealElements(){

    reveals.forEach(item=>{

        const windowHeight =
        window.innerHeight;

        const revealTop =
        item.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){

            item.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealElements);

revealElements();

