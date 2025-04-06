export default function side_scroll() {
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
