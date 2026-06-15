const timelineCards =
document.querySelectorAll(".timeline-card");

timelineCards.forEach((card,index)=>{

    card.style.transition =
    `all .8s ease ${index*0.2}s`;

});