const particleContainer =
document.createElement("div");

particleContainer.classList.add("particles");

document.body.appendChild(
particleContainer
);

for(let i=0;i<25;i++){

    let particle =
    document.createElement("span");

    particle.classList.add("particle");

    particle.style.left =
    Math.random()*100 + "%";

    particle.style.animationDuration =
    (5 + Math.random()*10) + "s";

    particle.style.animationDelay =
    Math.random()*5 + "s";

    particleContainer.appendChild(
    particle
    );

}