const loadingBarItemEL = document.querySelector(".loading-bar__item");

let width = 1;
let loadingBar = setInterval(function() {
    if (width >= 100) {
        clearInterval(loadingBar);
    } else {
        width++;
        loadingBarItemEL.style.width = width + "%";
    }
}, 10)


