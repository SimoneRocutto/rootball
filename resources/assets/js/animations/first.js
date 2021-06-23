import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { firstToSecondTransition }

const landingWrapperBefore = document.getElementById("landing-wrapper")
const navbar = document.getElementById("navbar")
const landingCta = document.getElementById("landing-cta")
const landingTitle = document.getElementById("landing-title")
const title = document.getElementById("intro-title")
const firstParagraph = document.getElementById("first-intro-paragraph")
const secondParagraph = document.getElementById("second-intro-paragraph")
const downArrow = document.getElementById("second-slide__btn-box")

landingCta?.addEventListener("click", firstToSecondTransition)

async function firstToSecondTransition() {
    landingCta?.classList.remove("through-overlay")
    landingWrapperBefore?.classList.add("full-size")
    navbar?.classList.remove("hidden")
    await timeout(700)
    landingTitle?.classList.add("hidden")
    // window.scroll(0, window.innerHeight)
    myFullpage.moveSectionDown()
    title?.classList.remove("slided-out")
    await timeout(500)
    firstParagraph?.classList.remove("slided-out")
    await timeout(500)
    secondParagraph?.classList.remove("slided-out")
    await timeout(700)
    downArrow?.classList.remove("slided-out")
}