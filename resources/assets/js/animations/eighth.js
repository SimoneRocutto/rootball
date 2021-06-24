import { timeout } from '../functions/index'
import { myFullpage } from '../packages'
export { eightToNinthTransition }

const sec9Title = document.getElementById("sec-9-title")
const sec9Sub1 = document.getElementById("sec-9-sub-1")

async function eightToNinthTransition() {
    sec9Title?.classList.remove("slided-out")
    await timeout(500)
    sec9Sub1?.classList.remove("slided-out")
    await timeout(500)
}