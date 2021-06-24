import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { sixthToSeventhTransition }

const sec7Title = document.getElementById("sec-7-title")
const sec7Sub1 = document.getElementById("sec-7-sub-1")
const sec7Par1 = document.getElementById("sec-7-par-1")
const sec7Par2 = document.getElementById("sec-7-par-2")
const sec7Par3 = document.getElementById("sec-7-par-3")
const sec7Par4 = document.getElementById("sec-7-par-4")

async function sixthToSeventhTransition() {
    sec7Title?.classList.remove("slided-out")
    await timeout(500)
    sec7Sub1?.classList.remove("slided-out")
    await timeout(500)
    sec7Par1?.classList.remove("slided-out")
    await timeout(500)
    sec7Par2?.classList.remove("slided-out")
    await timeout(500)
    sec7Par3?.classList.remove("slided-out")
    await timeout(500)
    sec7Par4?.classList.remove("slided-out")
    await timeout(500)
}