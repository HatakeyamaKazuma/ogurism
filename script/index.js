import slider from "./_modules/slider.js";
import hamburgerFunc from "./_modules/hamburger.js";
import accordionFunc from "./_modules/accordion.js";
import fadeFunc from "./_modules/fade.js";
import sideScrollFunc from "./_modules/side_scroll.js";
import heroHeaderFunc from "./_modules/heroHeader.js";
//追加で必要な関数

hamburgerFunc();
accordionFunc();
fadeFunc();
heroHeaderFunc();
sideScrollFunc();

document.addEventListener("DOMContentLoaded", function () {
    if (window.innerWidth <= 750) {
        slider();
    }
})

document.addEventListener("resize", function () {
    if (window.innerWidth <= 750) {
        slider();
    }
})
