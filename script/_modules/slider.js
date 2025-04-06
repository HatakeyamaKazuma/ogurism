export default function slider() {
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