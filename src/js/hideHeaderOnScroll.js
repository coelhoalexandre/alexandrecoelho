const header = document.querySelector(".header");
let lastScrollTop = 0;
window.addEventListener("scroll", () => hideHeaderOnScroll());

export default function hideHeaderOnScroll() {
    let scrollTop = window.pageY || document.documentElement.scrollTop;
    if(scrollTop > lastScrollTop) {
      header.style.top = "-80px";
    } else {
      header.style.top = "0";
    };
    lastScrollTop = scrollTop;
}

