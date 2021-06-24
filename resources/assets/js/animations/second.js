import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { secondToThirdTransition }

const downArrow = document.getElementById("sec-2-btn")
const sec3Title = document.getElementById("sec-3-title")
const sec3Par1 = document.getElementById("sec-3-par-1")
const sec3Par2 = document.getElementById("sec-3-par-2")

downArrow?.addEventListener("click", () => {
    myFullpage.moveSectionDown()
})

async function secondToThirdTransition() {
    // window.scroll(0, window.innerHeight*2)
    // myFullpage.moveSectionDown()
    sec3Title?.classList.remove("slided-out")
    await timeout(500)
    sec3Par1?.classList.remove("slided-out")
    await timeout(500)
    sec3Par2?.classList.remove("slided-out")
    await timeout(700)
}