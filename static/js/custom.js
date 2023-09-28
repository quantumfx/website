// iOS detector
// use backup if iphone
let platform = navigator?.userAgentData?.platform || navigator?.platform || 'iPhone';

function iOS() {
  return [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(platform)
  // iPad on iOS 13 detection
  || (navigator.userAgent.includes("Mac") && "ontouchend" in document)
};

let tagline = document.querySelector(".tagline");

// If this is the first time on the domain in the session, don't scroll, if not, scroll to tagline.
let topScroll = localStorage.getItem("window-scroll");
if (topScroll !== null) {
  if (iOS() == true) {
    tagline.scrollIntoView();
  }
  else {
    document.documentElement.scrollTop = parseInt(tagline.offsetTop, 10);
  }
};

window.addEventListener("beforeunload", () => {
  localStorage.setItem("window-scroll", true);
});