// header-navbar toggling event listener
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
const navbarToggle = document.getElementById("navbar-toggle");
const navbar = document.getElementById("navbar");
const openClass = "dropdown-is-open";
// hiding the dropdown is necessary to prevent it
// from showing up when resizing the window
const hiddenClass = "dropdown-is-hidden";
navbarToggle === null || navbarToggle === void 0 ? void 0 : navbarToggle.addEventListener('click', () => __awaiter(void 0, void 0, void 0, function* () {
    if (navbar === null || navbar === void 0 ? void 0 : navbar.classList.contains(openClass)) {
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(openClass);
        yield timeout(300);
        navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(hiddenClass);
        return;
    }
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.remove(hiddenClass);
    yield timeout(20);
    navbar === null || navbar === void 0 ? void 0 : navbar.classList.add(openClass);
}));
