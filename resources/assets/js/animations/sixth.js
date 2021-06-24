import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { sixthToSeventhTransition }

const sec7Title = document.getElementById("sec-7-title")
const sec7Sub1 = document.getElementById("sec-7-sub-1")
const sec7Block1 = document.getElementById("sec-7-block-1")

async function sixthToSeventhTransition() {
    sec7Title?.classList.remove("slided-out")
    await timeout(500)
    sec7Sub1?.classList.remove("slided-out")
    await timeout(500)
    sec7Block1?.classList.remove("slided-out")
    await timeout(500)
}