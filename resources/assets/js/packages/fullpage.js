import fullpage from 'fullpage.js'
import { firstToSecondTransition } from '../animations/first'
import { secondToThirdTransition } from '../animations/second'
import { thirdToFourthTransition } from '../animations/third'
import { fourthToFifthTransition } from '../animations/fourth'
import { fifthToSixthTransition } from '../animations/fifth'
import { sixthToSeventhTransition } from '../animations/sixth'
import { seventhToEighthTransition } from '../animations/seventh'
import { eightToNinthTransition } from '../animations/eighth'

const navbar = document.getElementById("navbar")
const landingTitle = document.getElementById("sec-1-title")

export const myFullpage = new fullpage('#fullpage', {
    // multiple class checks are needed to prevent user input
    // scrolling but to allow animation-triggered scrolling
    onLeave: function (origin, destination, direction) {
        if (origin.index == 0 && destination.index == 1) {
            // this if block is needed to avoid an infinite
            // scroll loop
            if (navbar?.classList.contains("hidden")) {
                firstToSecondTransition()
                return false // prevents the normal scroll
            } else if (!landingTitle?.classList.contains("hidden")) {
                return false
            }
        }
        if (origin.index == 1 && destination.index == 2) {
            secondToThirdTransition()
        }
        if (origin.index == 2 && destination.index == 3) {
            thirdToFourthTransition()
        }
        if (origin.index == 3 && destination.index == 4) {
            fourthToFifthTransition()
        }
        if (origin.index == 4 && destination.index == 5) {
            fifthToSixthTransition()
        }
        if (origin.index == 5 && destination.index == 6) {
            sixthToSeventhTransition()
        }
        if (origin.index == 6 && destination.index == 7) {
            seventhToEighthTransition()
        }
        if (origin.index == 7 && destination.index == 8) {
            eightToNinthTransition()
        }
        if (origin.index == 8 && destination.index == 9) {
            thirdToFourthTransition()
        }
    },
    sectionsColor: [
        '',
        '',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)',
        'var(--clr-neutral-800)'
        ]
})
