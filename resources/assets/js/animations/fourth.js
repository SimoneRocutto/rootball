import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { fourthToFifthTransition }

const sec5Title = document.getElementById("sec-5-title")
const sec5Par1 = document.getElementById("sec-5-par-1")
const sec5Par2 = document.getElementById("sec-5-par-2")
const sec5Par3 = document.getElementById("sec-5-par-2")

async function fourthToFifthTransition() {
    sec5Title?.classList.remove("slided-out")
    await timeout(500)
    sec5Par1?.classList.remove("slided-out")
    await timeout(500)
    sec5Par2?.classList.remove("slided-out")
    await timeout(500)
    sec5Par3?.classList.remove("slided-out")
    await timeout(700)
}