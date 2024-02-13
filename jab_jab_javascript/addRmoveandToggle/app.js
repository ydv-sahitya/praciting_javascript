const paragraphEl = document.querySelector("p");
const bodyEl = document.querySelector("body");
const switchEl = document.querySelector("button");

paragraphEl.classList.add("red-giant");
paragraphEl.classList.remove("red-giant");



switchEl.onclick = function() {
    bodyEl.classList.toggle("on");
};