<link rel="stylesheet" href="./header.css">

<header class="header">
    <figure class="header__logo">
        <img class="default" src="../image/header__logo.png" alt="">
        <img class="open" src="../image/header__logo--gray.png" alt="">
    </figure>
    <ul class="header__link pc_only garamond">
        <li class="header__link--text">
            <a href="">
                TOP
            </a>
        </li>
        <li class="header__link--text">
            <a href="">
                Business
            </a>
        </li>
        <li class="header__link--text">
            <a href="">
                Artist
            </a>
        </li>
    </ul>
    <button id="headerButton" class="header__button">
        <span class="header__button--line"></span>
    </button>
    <nav class="header__nav">
        <ul class="nav__list garamond">
            <li class="nav__contents">
                <a href="">Top</a>
            </li>
            <li class="nav__contents pc_only">
                <a href="/ogurism/news/">News</a>
            </li>
            <li class="nav__contents">
                <a href="/ogurism/business/">Business</a>
            </li>
            <li class="nav__contents">
                <a href="/ogurism/artist/">Artist</a>
            </li>
        </ul>
        <p class="header__nav--text serif">明日を変える、新しい風を作る。</p>
        <figure class="nav__image">
            <picture>
                <source srcset="../image/nav__image--pc.png" media="(min-width: 750px)">
                <img src="../image/nav__image--sp.png" alt="">
            </picture>
        </figure>
    </nav>
</header>

<script type="module" src="./header.js"></script>
