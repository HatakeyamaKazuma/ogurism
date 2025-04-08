<!DOCTYPE html>
<html lang="ja">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OGURISM</title>
    <link rel="icon" href="./favicon/favicon.ico" sizes="32x32">
    <link rel="icon" href="./favicon/icon.svg" type="image/svg+xml">
    <link rel="apple-touch-icon" href="./favicon/apple-touch-icon.png">

    <link rel="stylesheet" href="./style/reset.css">
    <link rel="stylesheet" href="./style/style.css">

    <?php include 'components/font.php'; ?>
</head>

<body>
    <!-- ヘッダー -->
    <?php include 'components/header.php'; ?>
    <!-- ヘッダー -->

    <!-- メイン -->
    <div id="preloader">
        <div class="loader-images">
            <img src="./image/hh_04.png" class="loader-img" />
            <img src="./image/hh_05.png" class="loader-img" />
        </div>
    </div>

    <main class="main">
        <section id="mainVisual" class="main__visual">
            <video class="fix__video sp_only" src="./video/20250401_1080_1920_mv_sp.mp4"
                poster="" loop muted playsinline></video>
            <video class="fix__video pc_only" src="./video/20250401_1080_1920_mv_pc.mp4"
                poster="" loop muted playsinline></video>
            <h2 class="main__visual--text serif fade__main"><span class="_01">明日を変える、</span><br class="sp_only"><span class="_02">新しい風を作る。</span></h2>
            <span class="bar"></span>
        </section>

        <section id="News" class="news fade">
            <h2 class="title garamond">News</h2>

            <div class="pc__flex">
                <article class="business">
                    <p class="sub__title garamond">
                        Business
                    </p>
                    <div class="business__swiper serif">
                        <ul class="swiper-wrapper">
                            <!-- スライド -->
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>

                <article class="artist">
                    <p class="sub__title garamond">
                        Artist
                    </p>
                    <div class="artist__swiper serif">
                        <!-- 必要に応じたwrapper -->
                        <ul class="swiper-wrapper">
                            <!-- スライド -->
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                            <li class="swiper-slide">
                                <a href="">
                                    <figure class="news__img">
                                        <img src="./image/news__img.png" alt="">
                                    </figure>
                                    <p class="news__text">
                                        <span class="news__date">250505</span>|<span
                                            class="news__category">News</span><br>
                                        テキストテキストテキストテキストテキストテキストテキ
                                    </p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </article>
            </div>
            <div class="view_all">
                <a href="/ogurism/news/">
                    <p class="view_all__text serif">View All</p>
                    <div class="view_all__button">
                        <span class="arrow"></span>
                    </div>
                </a>
            </div>
            <div class="background"></div>
        </section>

        <section id="About" class="about">
            <h2 class="title garamond fade">
                About us
            </h2>
            <p class="sub_title serif fade">
                企業の成長と革新を支える<br class="sp_only">パートナーとして、<br>
                戦略的なアドバイスと課題解<br class="sp_only">決を提供します。
            </p>
            <p class="text serif fade">
                ビジネスリーダーとしての視点から、組織の変革や人材の育成を支援し、<br class="pc_only">持続可能な成功を築くための道筋を共に歩みます。<br>
                また業界をリードする知見を広めるべく、<br>
                定期的な講演や著作活動を通じて価値ある情報を<br class="sp_only">提供しています。<br>
                私たちの使命は、クライアントが直面する課題に真摯に向き合い、確かな信頼を築き上げることです。<br>
                時代を超えた価値を創造し、共に成長するパートナーであり続けます。
            </p>
            <figure class="about__img fade">
                <picture class="pc_only">
                    <img src="./image/about__movie--pc.png">
                </picture>
                <video class="sp_only" src="./video/20250401_1080_1080_3.mp4" poster="./image/about__movie--sp.png" loop
                    muted autoplay playsinline></video>
            </figure>
        </section>

        <section id="Projects" class="projects">
            <h2 class="title garamond pc_only">Projects</h2>

            <div class="projects__flex">
                <article id="Business" class="business contents fade__bg">
                    <h3 class="title cormorant"><span class="num">01 </span>Business</h3>
                    <p class="text serif">
                        企業の成長を加速させる戦略的なサポートを提供。経営層との密接な連携を通じて、組織の変革、リーダーシップの育成、そして持続可能な成長のための実践的なアドバイスを行います。<br>
                        <br>
                        コンサルティング | アドバイザー | 社外取締役 | 講演・セミナー | 出版
                    </p>
                    <a class="button" href="">
                        <span class="arrow"></span>
                    </a>
                </article>

                <article id="Artist" class="artist contents fade__bg">
                    <h3 class="title cormorant"><span class="num">02 </span>Artist</h3>
                    <p class="text serif">
                        オリジナルの楽曲を制作し、CDや各種音楽配信サービスを通じて作品を発信。<br>
                        音楽の力で心を動かし、世界中の人々とつながることを目指しています。<br>
                        <br>
                        アーティストマネジメント | コンサート<br>
                        | プロデュース | テノール歌手 | 社交ダンス | チアー育成 | クロノグラファ
                    </p>
                    <a class="button" href="">
                        <span class="arrow"></span>
                    </a>
                </article>
            </div>
        </section>

        <section id="Concept" class="concept serif">
            <h2 class="title garamond">
                Concept
            </h2>
            <p class="sub_title">
                「瞬間」に全力を尽くし、<br>
                丁寧に生きる。
            </p>
            <p class="text">
                風は、新しい流れを呼びこむもの。<br>
                風の吹く場所はいつも新鮮な空気に満ち、<br>
                かすかに吹く風も、何かを変える力を宿しています。<br>
                その大胆で繊細なOGURISMのスピリットを胸に、<br>
                今日よりもっとよいあしたをめざし新しい風が<br>
                生まれる場所をつくります。<br>
                互いに影響しあい、ともに成長できるように。<br>
                気持ちよくひらかれた場所であり続けます。
            </p>
            <article class="side-slide_area">
                <div class="sticky_wrap">
                    <figure class="logo">
                        <img src="./image/concept__logo.png" alt="">
                    </figure>
                    <ul class="image__list">
                        <li class="image__list--contents">
                        </li>
                        <li class="image__list--contents">
                            <img src="./image/concept__01.jpg" alt="">
                        </li>
                        <li class="image__list--contents">
                            <video src="./video/20250401_1080_1080_3.mp4" poster="./image/about__movie--sp.png" loop
                                muted autoplay playsinline></video>
                        </li>
                        <li class="image__list--contents">
                            <img src="./image/concept__03.jpg" alt="">
                        </li>
                        <li class="image__list--contents">
                            <img src="./image/concept__04.jpg" alt="">
                        </li>
                        <li class="image__list--contents">
                            <img src="./image/concept__05.jpg" alt="">
                        </li>
                    </ul>
                </div>
            </article>
        </section>

        <section id="Contact" class="contact">
            <div class="contact__text">
                <h2 class="title garamond">Contact</h2>
                <p class="text serif">お仕事、取材、採用、その他問い合わせについては<br>メールよりご連絡ください。</p>
            </div>
            <a class="button" href="">
                <span class="arrow"></span>
            </a>
        </section>
    </main>

    <?php include 'components/footer.php'; ?>

    <!-- jsの読み込み -->
    <script type="module" src="./script/index.js"></script>
</body>

</html>