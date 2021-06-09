import { timeout } from '../functions/index.js'

const homeWrapperBefore = document.getElementById("home-wrapper")
const navbar = document.getElementById("navbar")
const homeCta = document.getElementById("home-cta")
const title = document.getElementById("intro-title")
const firstParagraph = document.getElementById("first-intro-paragraph")
const secondParagraph = document.getElementById("second-intro-paragraph")
const downArrow = document.getElementById("second-slide__btn-box")

homeCta?.addEventListener("click", async () => {
    // this if statement avoids the useless wait if the animation has already happened once
    if (navbar?.classList.contains("hidden")) {
        homeWrapperBefore?.classList.add("full-size")
        navbar?.classList.remove("hidden")
        await timeout(700)
    }
    window.scroll(0, window.innerHeight)
    title?.classList.remove("slided-out")
    await timeout(500)
    firstParagraph?.classList.remove("slided-out")
    await timeout(500)
    secondParagraph?.classList.remove("slided-out")
    await timeout(700)
    downArrow?.classList.remove("slided-out")
})
