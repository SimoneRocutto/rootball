// header-navbar toggling event listener

const navbarToggle = document.getElementById("navbar-toggle")
const navbar = document.getElementById("navbar")
const openClass = "navlist-is-open"

navbarToggle?.addEventListener('click', () => {
    if (navbar?.classList.contains(openClass)) {
        navbar?.classList.remove(openClass)
        return
    }
    navbar?.classList.add(openClass)
})