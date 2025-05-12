import hamburgerFunc from "./_modules/hamburger.js";
import accordionFunc from "./_modules/accordion.js";
import fadeFunc from "./_modules/fade.js";
//追加で必要な関数

// NewsSwiper
document.addEventListener("DOMContentLoaded", function () {
    const allBtn = document.getElementById("all__button");
    const businessBtn = document.getElementById("business__button");
    const artistBtn = document.getElementById("artist__button");
    const buttons = document.querySelectorAll(".news__buttons .button");

    const slides = document.querySelectorAll(".swiper-slide");

    function filterSlides(category) {
        slides.forEach(slide => {
            const slideCategory = slide.getAttribute("data-category");
            if (category === "all" || slideCategory === category) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }

    function handleButtonClick(button, category) {
        // is-active の切り替え
        buttons.forEach(btn => btn.classList.remove("is-active"));
        button.classList.add("is-active");

        // フィルター処理
        filterSlides(category);
    }

    // 初期表示：全て表示 + allボタンをアクティブに
    filterSlides("all");
    allBtn.classList.add("is-active");

    // 各ボタンにイベント追加
    allBtn.addEventListener("click", () => handleButtonClick(allBtn, "all"));
    businessBtn.addEventListener("click", () => handleButtonClick(businessBtn, "business"));
    artistBtn.addEventListener("click", () => handleButtonClick(artistBtn, "artist"));
});



hamburgerFunc();
accordionFunc();
fadeFunc();