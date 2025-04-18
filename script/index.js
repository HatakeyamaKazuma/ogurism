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

function headerLogo() {
    document.addEventListener("DOMContentLoaded", () => {
        const about = document.getElementById("About");
        const concept = document.getElementById("Concept");
        const projects = document.getElementById("Projects");

        const logoFigure = document.querySelector(".header__logo");
        const defaultLogo = logoFigure.querySelector(".default");
        const openLogo = logoFigure.querySelector(".open");

        const headerContents = document.querySelector(".header");

        function isInTriggerZone(el, triggerRatio) {
            const rect = el.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            const triggerPoint = windowHeight * triggerRatio;

            return rect.top < triggerPoint && rect.bottom > 0;
        }

        function checkLogoVisibility() {
            const isPC = window.innerWidth >= 768;

            // トリガー位置（PCは90%、SPは50%）
            const triggerRatio = isPC ? 0.1 : 0.1;

            // 対象セクション（デバイスによって切り替え）
            const targets = isPC ? [projects, concept] : [about, concept];

            // いずれかが範囲に入っていたらロゴ切り替え
            const shouldChangeLogo = targets.some(section => isInTriggerZone(section, triggerRatio));

            if (shouldChangeLogo) {
                defaultLogo.style.opacity = "0";
                openLogo.style.opacity = "1";
                headerContents.classList.add("_black"); 
            } else {
                defaultLogo.style.opacity = "1";
                openLogo.style.opacity = "0";
                headerContents.classList.remove("_black"); 
            }
        }

        // 初回チェック
        checkLogoVisibility();

        // スクロール・リサイズ時に再チェック
        window.addEventListener("scroll", checkLogoVisibility);
        window.addEventListener("resize", checkLogoVisibility);
    });
}

function heroHeaderFunc() {
    const isVisited = localStorage.getItem("visited");

    if (isVisited) {
        const preloader = document.getElementById("preloader");
        if (preloader) {
            preloader.style.display = "none";
        }
        document.body.style.overflow = "auto";

        const mainVideo = document.querySelectorAll('.fix__video');

        // ローディング後の処理へ
        mainVideo.forEach(video => video.play().catch((err) => {
            console.log('再生できなかった:', err);
        }));


        // is-active は初回以外でも必要なら追加
        const fadeAnime = document.querySelector('.fade__main');
        fadeAnime?.classList.add('is-active');
        return;
    }

    document.addEventListener("DOMContentLoaded", () => {
        const images = document.querySelectorAll(".loader-img");
        const fadeAnime = document.querySelector('.fade__main');
        const mainVideo = document.querySelectorAll('.fix__video');
        const preloader = document.getElementById("preloader");

        let current = 0;
        let animationEnded = false;

        document.body.style.overflow = "hidden";

        const fadeImageLoop = () => {
            if (current < images.length) {
                images.forEach(img => img.classList.remove("active"));
                images[current].classList.add("active");
                current++;
                setTimeout(fadeImageLoop, 3000);
            } else {
                // アニメーション完了フラグをON
                animationEnded = true;

                // ローディング後の処理へ
                mainVideo.forEach(video => video.play().catch((err) => {
                    console.log('再生できなかった:', err);
                }));

                setTimeout(() => {
                    if (!preloader) return;

                    preloader.classList.add('is-active');
                    preloader.style.pointerEvents = "none";

                    setTimeout(() => {
                        preloader.style.display = "none";
                        document.body.style.overflow = "auto";

                        // ローディングアニメが終わったあとに is-active を追加
                        if (animationEnded) {
                            fadeAnime?.classList.add('is-active');
                        }

                        // visited フラグ保存
                        localStorage.setItem("visited", "true");

                    }, 1500);
                }, 1000);
            }
        };

        fadeImageLoop();

        let loadFinished = false;
        let minimumTimePassed = false;

        setTimeout(() => {
            minimumTimePassed = true;
            tryHidePreloader();
        }, 6000);

        window.addEventListener("load", () => {
            loadFinished = true;
            tryHidePreloader();
        });

        function tryHidePreloader() {
            if (loadFinished && minimumTimePassed) {
                if (!preloader) return;

                preloader.classList.add('is-active');
                preloader.style.pointerEvents = "none";

                setTimeout(() => {
                    preloader.style.display = "none";
                    document.body.style.overflow = "auto";

                    // ここでも fadeAnime を追加しておく（念のため）
                    if (animationEnded) {
                        fadeAnime?.classList.add('is-active');
                    }

                    localStorage.setItem("visited", "true");
                }, 1500);
            }
        }
    });
}




function sideScrollFunc() {
    const section = document.querySelector('.side-slide_area');
    const imageList = section.querySelector('.image__list');

    const rect = section.getBoundingClientRect();
    const startY = window.scrollY + rect.top;
    const endY = startY + section.offsetHeight - window.innerHeight;
    const maxScroll = endY - startY;

    let currentX = 0; // 現在の位置
    let targetX = 0;  // 目標位置

    function animate() {
        const scrollY = window.scrollY;
        const scrollProgress = Math.min(Math.max(scrollY - startY, 0), maxScroll);
        targetX = -scrollProgress;

        // 緩やかに currentX を targetX に近づける
        currentX += (targetX - currentX) * 0.05;

        imageList.style.transform = `translateX(${currentX}px)`;

        requestAnimationFrame(animate);
    }

    animate(); // アニメーション開始
}

function copyButton() {
    const copyButton = document.getElementById("copyButton");

    const email = "〇〇@google.com";

    copyButton.addEventListener("click", () => {
        navigator.clipboard.writeText(email)
            .then(() => {
                alert("テキストがコピーされました");
            })
            .catch((err) => {
                alert("コピーに失敗しました: " + err);
            });
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
        slidesPerView: 1.6,//枚数指定
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
        slidesPerView: 1.6,//枚数指定
    });
    
    const newsSwiper = new Swiper(".news__swiper", {
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

hamburgerFunc();
accordionFunc();
fadeFunc();
headerLogo();
heroHeaderFunc();
sideScrollFunc();
copyButton();

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
