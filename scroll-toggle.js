let scrollToggleSafeMargin = 100;

document.addEventListener(
  "DOMContentLoaded",
  () => {
    if (document.body.hasAttribute("scrollvisibilitymargin")) {
      scrollToggleSafeMargin = parseInt(
        document.body.getAttribute("scrollvisibilitymargin")
      );
    }
    scrollToggleVisibilityCheck();
  },
  false
);

document.addEventListener("scroll", scrollToggleVisibilityCheck);
scrollToggleVisibilityCheck();

function scrollToggleVisibilityCheck() {
  Array.from(document.querySelectorAll("[onshow]")).forEach((el) => {
    let margin = scrollToggleSafeMargin;
    if (e.hasAttribute("scrollvisibilitymargin")) {
      margin = parseInt(e.getAttribute("scrollvisibilitymargin"));
    }
    if (isVisible(e, margin)) {
      if (!el.classList.contains(el.getAttribute("onshow"))) {
        el.classList.add(el.getAttribute("onshow"));
      }
    }
  });

  Array.from(document.querySelectorAll("[whilevisible]")).forEach((el) => {
    let margin = scrollToggleSafeMargin;
    if (e.hasAttribute("scrollvisibilitymargin")) {
      margin = parseInt(e.getAttribute("scrollvisibilitymargin"));
    }
    if (isVisible(e, margin)) {
      if (!el.classList.contains(el.getAttribute("whilevisible"))) {
        el.classList.add(el.getAttribute("whilevisible"));
      }
    } else {
      if (el.classList.contains(el.getAttribute("whilevisible"))) {
        el.classList.remove(el.getAttribute("whilevisible"));
      }
    }
  });

  Array.from(document.querySelectorAll("[onfullshow]")).forEach((el) => {
    let margin = scrollToggleSafeMargin;
    if (e.hasAttribute("scrollvisibilitymargin")) {
      margin = parseInt(e.getAttribute("scrollvisibilitymargin"));
    }
    if (isFullyVisible(e, margin)) {
      if (!el.classList.contains(el.getAttribute("onfullshow"))) {
        el.classList.add(el.getAttribute("onfullshow"));
      }
    }
  });

  Array.from(document.querySelectorAll("[whilefullyvisible]")).forEach((el) => {
    let margin = scrollToggleSafeMargin;
    if (e.hasAttribute("scrollvisibilitymargin")) {
      margin = parseInt(e.getAttribute("scrollvisibilitymargin"));
    }
    if (isFullyVisible(e, margin)) {
      if (!el.classList.contains(el.getAttribute("whilefullyvisible"))) {
        el.classList.add(el.getAttribute("whilefullyvisible"));
      }
    } else {
      if (el.classList.contains(el.getAttribute("whilefullyvisible"))) {
        el.classList.remove(el.getAttribute("whilefullyvisible"));
      }
    }
  });
}

function isVisible(e,margin) {
  return (
    e.getBoundingClientRect().top + margin <
      window.innerHeight &&
    e.getBoundingClientRect().bottom > margin
  );
}

function isFullyVisible(e, margin) {
  return (
    e.getBoundingClientRect().top + margin < window.innerHeight &&
    e.getBoundingClientRect().bottom + margin < window.innerHeight &&
    e.getBoundingClientRect().top > margin
  );
}
