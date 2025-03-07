(function () {
  function initScrollAnimation() {
    const elementsToAnimate = document.querySelectorAll("main img, main hr");
    if (!elementsToAnimate.length) return;

    if (window.scrollAnimationObserver) {
      window.scrollAnimationObserver.disconnect();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("viewed");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    );

    elementsToAnimate.forEach((element) => {
      observer.observe(element);
    });

    window.scrollAnimationObserver = observer;
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initScrollAnimation);
  } else {
    initScrollAnimation();
  }

  document.addEventListener("turbo:load", initScrollAnimation);
  document.addEventListener("turbo:render", initScrollAnimation);
})();
