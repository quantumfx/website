let topScroll = localStorage.getItem("window-scroll");
if (topScroll !== null) {
  // window.scrollTo(0, parseInt(topScroll, 10) );
  document.documentElement.scrollTop = parseInt(topScroll, 10);
}

window.addEventListener("beforeunload", () => {
  // localStorage.setItem("window-scroll", window.scrollY);
  localStorage.setItem("window-scroll", document.documentElement.scrollTop);
});