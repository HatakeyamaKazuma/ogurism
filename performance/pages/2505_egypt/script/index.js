function hamburgerFunc() {
    //ここにハンバーガーメニューの記述
    const hamburgerButton = document.getElementById("headerButton");
    const headerLogo = document.querySelector(".header__logo .open")


    window.addEventListener('load', function () {
        // ハンバーガーメニュー
        hamburgerButton.addEventListener('click', function () {
            const hamburgerGetClass = hamburgerButton.classList.contains('is-active');

            if (!hamburgerGetClass) {
                hamburgerButton.classList.add('is-active');
                headerLogo.classList.add('is-active');
            } else {
                hamburgerButton.classList.remove('is-active');
                headerLogo.classList.remove('is-active');
            }
        })
    })
}

function accordionFunc() {

    const accordionElements = document.querySelectorAll(".accordion");
    
    accordionElements.forEach((openElem) => {
        openElem.addEventListener('click', function () {
            const accordionGetClass = openElem.classList.contains('is-active');

            if (!accordionGetClass) {
                openElem.classList.add('is-active');
            } else {
                openElem.classList.remove('is-active');
            }
        })
    })
}

function fadeFunc() {
    document.addEventListener('DOMContentLoaded', function () {
        const fadeBackground = document.querySelectorAll('.fade__bg');
        const fadeAnime = document.querySelectorAll('.fade');

        const fadeBackgroundObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                } else {
                    entry.target.classList.remove('is-active');
                }
            });
        }, {
            threshold: 0.3
        });

        const fadeAnimeObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                    observer.unobserve(entry.target); // ←ここ修正
                }
            });
        }, {
            threshold: 0.1
        });

        fadeBackground.forEach(el => fadeBackgroundObserver.observe(el));
        fadeAnime.forEach(el => fadeAnimeObserver.observe(el));
    });
}

const loopSwiper = new Swiper(".loopSwiper", {
    loop: true, // スライドをループさせる
    autoplay: {
        delay: 0, // 3秒ごとに自動スライド
    },
    effect: 'slide', // スライドのエフェクト（デフォルト）
    speed: 6000, // スライドの速度（ミリ秒）
    slidesPerView: 1.5,//枚数指定
    allowTouchMove: false, // スワイプ無効
    spaceBetween: '10%',

    breakpoints: {
        750: {
            slidesPerView: 4,
            spaceBetween: 40,
        }
    },
});

const egyptSwiper = new Swiper(".egyptSwiper", {
    pagination: {
        el: ".swiper-pagination-egypt", // ページネーションのクラス名を指定
        type: "fraction", // ページネーションのtypeを指定
    },
    loop: true, // スライドをループさせる
    // autoplay: {
    //     delay: 6000, // 6秒ごとに自動スライド
    //     disableOnInteraction: true
    // },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    effect: 'slide', // スライドのエフェクト（デフォルト）
    speed: 1000, // スライドの速度（ミリ秒）
    slidesPerView: 1.25,//枚数指定
    spaceBetween: '20%',
    centeredSlides: true,
    breakpoints: {
        750: {
            slidesPerView: 1.5,
            spaceBetween: '8%',
        }
    },
});


let articleSwiper = null;

function toggleArticleSwiper() {
    const screenWidth = window.innerWidth;

    if (screenWidth < 750) {
        // Swiperがまだ初期化されていなければ初期化
        if (!articleSwiper) {
            const articleSwiper = new Swiper(".articleSwiper", {
                loop: true, // スライドをループさせる
                // autoplay: {
                //     delay: 3000, // 3秒ごとに自動スライド
                //     disableOnInteraction: false, // ユーザー操作後も自動再生を継続
                // },
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                pagination: {
                    el: '.swiper-pagination',
                    clickable: true, // ページネーションをクリック可能に
                },
                effect: 'slide', // スライドのエフェクト（デフォルト）
                speed: 800, // スライドの速度（ミリ秒）
                centeredSlides: true,//真ん中寄せ
                slidesPerView: 1.6,//枚数指定
            });
        }
    } else {
        // Swiperが有効なら破棄
        if (articleSwiper) {
            articleSwiper.destroy(true, true);
            articleSwiper = null;
        }
    }
}

// ページ読み込み時とリサイズ時に実行
window.addEventListener('load', toggleArticleSwiper);
window.addEventListener('resize', toggleArticleSwiper);


hamburgerFunc();
accordionFunc();
fadeFunc();
