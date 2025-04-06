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
            threshold: 0.3  // 要素の10%が表示されたら発火
        });

        const fadeAnimeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-active');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1  // 要素の10%が表示されたら発火
        });

        fadeBackground.forEach(el => fadeBackgroundObserver.observe(el));
        fadeAnime.forEach(el => fadeAnimeObserver.observe(el));
    });
}

function heroHeaderFunc() {
    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".loader-img");
        let current = 0;

        // ローディング中スクロール禁止
        document.body.style.overflow = "hidden";

        const fadeImageLoop = () => {
            if (current < images.length) {
                // 画像を切り替え
                images.forEach(img => img.classList.remove("active"));
                images[current].classList.add("active");

                // 次の画像へ
                current++;
                setTimeout(fadeImageLoop, 1000); // 1秒ごとに切り替え
            } else {
                // すべて表示したらローディング画面をフェードアウト
                setTimeout(() => {
                    const preloader = document.getElementById("preloader");
                    preloader.style.opacity = 0;
                    preloader.style.pointerEvents = "none";
                    setTimeout(() => {
                        preloader.style.display = "none";

                        // ローディング画面が消えたらスクロールを有効に戻す
                        document.body.style.overflow = "auto";
                    }, 500); // フェードアウト後に消す
                }, 1000); // 最後の画像が表示されてから1秒後に消す
            }
        };

        fadeImageLoop(); // 画像表示を開始

        let loadFinished = false;
        let minimumTimePassed = false;

        setTimeout(() => {
            minimumTimePassed = true;
            tryHidePreloader();
        }, 6000); // 最低表示時間（5秒）

        window.addEventListener("load", () => {
            loadFinished = true;
            tryHidePreloader();
        });

        function tryHidePreloader() {
            if (loadFinished && minimumTimePassed) {
                const preloader = document.getElementById("preloader");
                preloader.style.opacity = 0;
                preloader.style.pointerEvents = "none";
                setTimeout(() => {
                    preloader.style.display = "none";

                    // ローディング画面が消えたらスクロールを有効に戻す
                    document.body.style.overflow = "auto";
                }, 1000); // フェードアウト後に消す
            }
        }
    });

}

function sideScrollFunc() {
    window.addEventListener('scroll', () => {
        const section = document.querySelector('.side-slide_area');
        const imageList = section.querySelector('.image__list');
        const stickyWrap = section.querySelector('.sticky_wrap');

        const rect = section.getBoundingClientRect();
        const startY = window.scrollY + rect.top;
        const endY = startY + section.offsetHeight - window.innerHeight;

        const scrollY = window.scrollY;
        const maxScroll = endY - startY;
        const scrollProgress = Math.min(Math.max(scrollY - startY, 0), maxScroll);
        const translateX = -scrollProgress;

        imageList.style.transform = `translateX(${translateX}px)`;
    });
}

function slider() {
    const businessSwiper = new Swiper(".business__swiper", {
        loop: true, // スライドをループさせる
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
        slidesPerView: 1.4,//枚数指定
    });

    const artistSwiper = new Swiper(".artist__swiper", {
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
        slidesPerView: 1.4,//枚数指定
    });
}

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
