// let sidebar = document.querySelector(".sidebar");

let top = localStorage.getItem("window-scroll");
if (top !== null) {
  document.body.scrollTop = parseInt(top, 10);
}

window.addEventListener("beforeunload", () => {
  localStorage.setItem("window-scroll", document.body.scrollTop);
});