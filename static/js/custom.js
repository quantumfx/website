let tagline = document.querySelector(".tagline");

// Stay on the same scroll even if you change page
// let topScroll = localStorage.getItem("window-scroll");
// if (topScroll !== null) {
  // window.scrollTo(0, parseInt(topScroll, 10) );
  // document.documentElement.scrollTop = parseInt(topScroll, 10);
// }

// window.addEventListener("beforeunload", () => {
  // localStorage.setItem("window-scroll", window.scrollY);
  // localStorage.setItem("window-scroll", document.documentElement.scrollTop);
// });

// Scroll to the page tagline
document.documentElement.scrollTop = parseInt(tagline.offsetTop, 10);
// tagline.scrollIntoView();