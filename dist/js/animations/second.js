const downArrow = document.getElementById("second-slide__btn-box");
downArrow === null || downArrow === void 0 ? void 0 : downArrow.addEventListener("click", () => {
    window.scroll(0, window.innerHeight * 2);
});
export {};
