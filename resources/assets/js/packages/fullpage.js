import fullpage from 'fullpage.js'
import { firstToSecondTransition } from '../animations/first'

const navbar = document.getElementById("navbar")

export const myFullpage = new fullpage('#fullpage', {
    onLeave: function (origin, destination, direction) {
        if (origin.index == 0 && destination.index == 1) {
            // this if block is needed to avoid an infinite
            // scroll loop
            if (navbar?.classList.contains("hidden")) {
                firstToSecondTransition()
                return false // prevents the normal scroll
            }
        }
        if (origin.index == 1 && destination.index == 2) {
        }
    }
})
