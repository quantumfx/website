let tagline = document.querySelector(".tagline");

// If this is the first time on the domain in the session, don't scroll, if not, scroll to tagline.

let topScroll = localStorage.getItem("window-scroll");
if (topScroll !== null) {
  document.documentElement.scrollTop = parseInt(tagline.offsetTop, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("window-scroll", true);
});