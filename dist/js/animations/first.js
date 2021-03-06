var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { timeout } from '../functions/index.js';
const landingWrapperBefore = document.getElementById("landing-wrapper");
const navbar = document.getElementById("navbar");
const landingCta = document.getElementById("landing-cta");
const landingTitle = document.getElementById("landing-title");
const title = document.getElementById("intro-title");
const firstParagraph = document.getElementById("first-intro-paragraph");
const secondParagraph = document.getElementById("second-intro-paragraph");
const downArrow = document.getElementById("second-slide__btn-box");
landingCta === null || landingCta === void 0 ? void 0 : landingCta.addEventListener("click", () => __awaiter(void 0, void 0, void 0, function* () {
    // this if statement avoids the useless wait if the animation has already happened once
    if (navbar === null || navbar === void 0 ? void 0 : navbar.classList.contains("hidden")) {
        landingWrapperBefore === null || landingWrapperBefore === void 0 ? void 0 : landingWrapperBefore.classList.add("full-size");
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove("hidden");
        yield timeout(700);
        landingTitle === null || landingTitle === void 0 ? void 0 : landingTitle.classList.add("hidden");
    }
    window.scroll(0, window.innerHeight);
    title === null || title === void 0 ? void 0 : title.classList.remove("slided-out");
    yield timeout(500);
    firstParagraph === null || firstParagraph === void 0 ? void 0 : firstParagraph.classList.remove("slided-out");
    yield timeout(500);
    secondParagraph === null || secondParagraph === void 0 ? void 0 : secondParagraph.classList.remove("slided-out");
    yield timeout(700);
    downArrow === null || downArrow === void 0 ? void 0 : downArrow.classList.remove("slided-out");
}));
