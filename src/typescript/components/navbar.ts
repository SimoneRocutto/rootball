// header-navbar toggling event listener

const navbarToggle = document.getElementById("navbar-toggle");
const navList = document.getElementById("nav-list");

navbarToggle?.addEventListener('click', () => {
    if (navList?.classList.contains("navlist-collapsed")) {
        navList?.classList.remove("navlist-collapsed");
        return;
    }
    navList?.classList.add("navlist-collapsed");
});