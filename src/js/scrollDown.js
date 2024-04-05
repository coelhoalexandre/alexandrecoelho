const arrow = document.querySelector(".home__container div");

arrow.addEventListener("click", () => scrollDown());

export default function scrollDown() {
    window.scroll({top: window.innerHeight, behavior:"smooth"});
}