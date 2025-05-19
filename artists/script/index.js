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

hamburgerFunc();
accordionFunc();
fadeFunc();

function matchTextHeights() {
    // 画面幅が750px未満なら高さをリセットして終了
    if (window.innerWidth < 750) {
        document.querySelectorAll('.artists__list--contents .text').forEach(el => {
            el.style.height = 'auto';
        });
        return;
    }

    const items = document.querySelectorAll('.artists__list--contents');
    const groupSize = 2;

    for (let i = 0; i < items.length; i += groupSize) {
        const group = Array.from(items).slice(i, i + groupSize);
        let maxHeight = 0;

        group.forEach(item => {
            const text = item.querySelector('.text');
            text.style.height = 'auto'; // 高さリセット
            if (text.offsetHeight > maxHeight) {
                maxHeight = text.offsetHeight;
            }
        });

        group.forEach(item => {
            const text = item.querySelector('.text');
            text.style.height = maxHeight + 'px';
        });
    }
}

window.addEventListener('load', matchTextHeights);
window.addEventListener('resize', () => {
    // リサイズ時にも再評価
    clearTimeout(window._textHeightTimeout);
    window._textHeightTimeout = setTimeout(matchTextHeights, 100);
});
