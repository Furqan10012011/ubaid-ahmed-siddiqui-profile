const counters =
document.querySelectorAll(".counter");

let started = false;

function runCounters(){

    if(started) return;

    const statsSection =
    document.querySelector(".stats");

    if(!statsSection) return;

    const position =
    statsSection.getBoundingClientRect().top;

    if(position < window.innerHeight - 100){

        started = true;

        counters.forEach(counter=>{

            const target =
            +counter.dataset.target;

            let count = 0;

            const speed =
            target / 100;

            const updateCounter = () => {

                if(count < target){

                    count += speed;

                    counter.innerText =
                    Math.ceil(count);

                    requestAnimationFrame(
                    updateCounter
                    );

                }
                else{

                    counter.innerText =
                    target + "+";

                }

            };

            updateCounter();

        });

    }

}

window.addEventListener(
"scroll",
runCounters
);

runCounters();