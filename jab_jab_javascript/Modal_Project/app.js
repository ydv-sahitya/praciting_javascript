const openModelTriggerEL = document.querySelector(".trigger");
const closeModalTriggerEL = document.querySelector(".close");
const modalEL = document.querySelector(".modal");


function main() {
    openModelTriggerEL.addEventListener("click", function() {
        modalEL.classList.add("open");
    }) 

    closeModalTriggerEL.addEventListener("click", function() {
        modalEL.classList.remove("open");
    })

    window.addEventListener("click", function(event) {
        if (event.target === modalEL) {
            modalEL.classList.remove("open");
        }
    })
}

main();