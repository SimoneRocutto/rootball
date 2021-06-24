import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { thirdToFourthTransition }

const sec4Title = document.getElementById("sec-4-title")
const sec4Par1 = document.getElementById("sec-4-par-1")
const sec4Par2 = document.getElementById("sec-4-par-2")

async function thirdToFourthTransition() {
    sec4Title?.classList.remove("slided-out")
    await timeout(500)
    sec4Par1?.classList.remove("slided-out")
    await timeout(500)
    sec4Par2?.classList.remove("slided-out")
    await timeout(700)
}