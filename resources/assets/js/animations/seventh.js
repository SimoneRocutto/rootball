import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { seventhToEighthTransition }

const sec8Title = document.getElementById("sec-8-title")
const sec8Sub1 = document.getElementById("sec-8-sub-1")
const sec8Par1 = document.getElementById("sec-8-par-1")
const sec8Sub2 = document.getElementById("sec-8-sub-2")
const sec8Par2 = document.getElementById("sec-8-par-2")

async function seventhToEighthTransition() {
    sec8Title?.classList.remove("slided-out")
    await timeout(500)
    sec8Sub1?.classList.remove("slided-out")
    await timeout(500)
    sec8Par1?.classList.remove("slided-out")
    await timeout(500)
    sec8Sub2?.classList.remove("slided-out")
    await timeout(500)
    sec8Par2?.classList.remove("slided-out")
    await timeout(500)
}