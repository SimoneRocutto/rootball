import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { firstToSecondTransition }

const landingWrapperBefore = document.getElementById("sec-1-wrapper")
const navbar = document.getElementById("navbar")
const landingCta = document.getElementById("sec-1-cta")
const landingTitle = document.getElementById("sec-1-title")
const title = document.getElementById("sec-2-title")
const firstParagraph = document.getElementById("sec-2-first-paragraph")
const secondParagraph = document.getElementById("sec-2-second-paragraph")
const downArrow = document.getElementById("sec-2-btn-box")

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