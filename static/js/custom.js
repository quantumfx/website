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

export const scrollElementIntoView = (element: HTMLElement, behavior?: 'smooth' | 'instant' | 'auto') => {

  let scrollTop = window.pageYOffset || window.scrollY || element.scrollTop

  // Furthermore, if you have for example a header outside the iframe 
  // you need to factor in its dimensions when calculating the position to scroll to
  // const headerOutsideIframe = window.parent.document.getElementsByClassName('myHeader')[0].clientHeight

  const finalOffset = element.getBoundingClientRect().top + scrollTop// + headerOutsideIframe

  window.parent.scrollTo({
    top: finalOffset,
    behavior: behavior || 'auto'
  })
};

let tagline = document.querySelector(".tagline");

// If this is the first time on the domain in the session, don't scroll, if not, scroll to tagline.
let topScroll = localStorage.getItem("window-scroll");
if (topScroll !== null) {
  if (iOS() == true) {
    scrollElementIntoView(tagline,'instant');
  }
  else {
    document.documentElement.scrollTop = parseInt(tagline.offsetTop, 10);
  }
};

window.addEventListener("beforeunload", () => {
  localStorage.setItem("window-scroll", true);
});