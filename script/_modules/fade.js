export default function fadeFunc() {
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