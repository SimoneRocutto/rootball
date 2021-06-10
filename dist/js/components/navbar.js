"use strict";
// header-navbar toggling event listener
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
const openClass = "navlist-is-open";
navbarToggle === null || navbarToggle === void 0 ? void 0 : navbarToggle.addEventListener('click', () => {
    if (navbar === null || navbar === void 0 ? void 0 : navbar.classList.contains(openClass)) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(openClass);
        return;
    }
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(openClass);
});
