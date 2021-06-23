import { myFullpage } from '../packages'

const downArrow = document.getElementById("sec-2-btn-box")

downArrow?.addEventListener("click", () => {
    // window.scroll(0, window.innerHeight*2)
    myFullpage.moveSectionDown()
})