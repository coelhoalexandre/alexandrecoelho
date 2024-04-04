const menuHamburger = document.querySelector(".header__menu-hamburger");
const navigation = document.querySelector(".header__navigation");
const navigationLis = document.querySelectorAll(".header__navigation li")

menuHamburger.addEventListener("click", () => toggleMenuHamburger());
navigationLis.forEach(navigationLi => navigationLi.addEventListener("click", () => toggleMenuHamburger()))
window.addEventListener("click", (e) => {
    if(e.target.parentNode !== menuHamburger) {
        toggleMenuHamburger(e, "window")
    } 
})


export default function toggleMenuHamburger(e, target) {
    if (target === "window") {
        menuHamburger.classList.remove("menu-hamburger--active");
        navigation.classList.remove("navigation--visible");
        return
    }

    menuHamburger.classList.toggle("menu-hamburger--active");
    navigation.classList.toggle("navigation--visible");

}

