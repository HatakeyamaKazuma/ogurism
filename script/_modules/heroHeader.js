export default function heroHeaderFunc() {
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