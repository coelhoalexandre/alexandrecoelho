const menuHamburger = document.querySelector(".header__menu-hamburger");
const navigation = document.querySelector(".header__navigation");

menuHamburger.addEventListener("click", () => toggleMenuHamburger());

export default function toggleMenuHamburger() {
    menuHamburger.classList.toggle("menu-hamburger--active");
    navigation.classList.toggle("navigation--visible");
}

