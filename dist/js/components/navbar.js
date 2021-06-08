"use strict";
// header-navbar toggling event listener
var navbarToggle = document.getElementById("navbar-toggle");
var navList = document.getElementById("nav-list");
navbarToggle === null || navbarToggle === void 0 ? void 0 : navbarToggle.addEventListener('click', function () {
    if (navList === null || navList === void 0 ? void 0 : navList.classList.contains("navlist-collapsed")) {
        navList === null || navList === void 0 ? void 0 : navList.classList.remove("navlist-collapsed");
        return;
    }
    navList === null || navList === void 0 ? void 0 : navList.classList.add("navlist-collapsed");
});
