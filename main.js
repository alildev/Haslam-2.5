// if (
//     "IntersectionObserver" in window &&
//     "IntersectionObserverEntry" in window &&
//     "intersectionRatio" in window.IntersectionObserverEntry.prototype
// ) {

// let observer = new IntersectionObserver(entries => {
// if (entries[0].boundingClientRect.y < 0) {
//     document.body.classList.add("header-not-at-top");
//     } else {
//     document.body.classList.remove("header-not-at-top");
//     }
// });
// observer.observe(document.querySelector("#top-of-site-pixel-anchor"));
// }


const body = document.body;
const triggerMenu = document.querySelector(".page-header .trigger-menu");
const nav = document.querySelector(".page-header nav");
const menu = document.querySelector(".page-header .menu");
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

triggerMenu.addEventListener("click", () => {
    body.classList.toggle("menu-open");
});

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
    body.classList.remove(scrollUp);
    return;
}

if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
    // down
    body.classList.remove(scrollUp);
    body.classList.add(scrollDown);
} else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
    // up
    body.classList.remove(scrollDown);
    body.classList.add(scrollUp);
}
    lastScroll = currentScroll;
});