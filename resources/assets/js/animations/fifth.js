import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { fifthToSixthTransition }

const sec6Title = document.getElementById("sec-6-title")
const sec6Par1 = document.getElementById("sec-6-par-1")
const sec6Par2 = document.getElementById("sec-6-par-2")

async function fifthToSixthTransition() {
    sec6Title?.classList.remove("slided-out")
    await timeout(500)
    sec6Par1?.classList.remove("slided-out")
    await timeout(500)
    sec6Par2?.classList.remove("slided-out")
    await timeout(700)
}