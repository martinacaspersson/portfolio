/* Mobilmeny: Menu/Close öppnar och stänger navigationen. */
const header = document.querySelector(".site-header");
const toggle = header.querySelector(".site-header__toggle");
const desktop = window.matchMedia("(min-width: 768px)");

function setMenu(open) {
  header.classList.toggle("is-open", open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.textContent = open ? "Close" : "Menu";
}

toggle.addEventListener("click", () => {
  setMenu(toggle.getAttribute("aria-expanded") !== "true");
});

// Stäng när man väljer en länk, trycker Escape eller går över till desktop
header.querySelectorAll(".site-nav__link").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && header.classList.contains("is-open")) {
    setMenu(false);
    toggle.focus();
  }
});

desktop.addEventListener("change", (event) => {
  if (event.matches) setMenu(false);
});

/* Projektbildspel: pilarna bläddrar en bild i taget och tonas ner i början/slutet. */
const slider = document.querySelector(".projects__slider");
const arrows = document.querySelectorAll(".projects__arrow");

if (slider && arrows.length) {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const updateArrows = () => {
    const maxScroll = slider.scrollWidth - slider.clientWidth;
    arrows.forEach((arrow) => {
      const direction = Number(arrow.dataset.direction);
      arrow.disabled = direction < 0
        ? slider.scrollLeft <= 1
        : slider.scrollLeft >= maxScroll - 1;
    });
  };

  arrows.forEach((arrow) => {
    arrow.addEventListener("click", () => {
      const card = slider.querySelector(".projects__card");
      const step = card.offsetWidth + parseFloat(getComputedStyle(slider).columnGap);
      slider.scrollBy({
        left: Number(arrow.dataset.direction) * step,
        behavior: reduceMotion.matches ? "auto" : "smooth",
      });
    });
  });

  let frame;
  const scheduleUpdate = () => {
    cancelAnimationFrame(frame);
    frame = requestAnimationFrame(updateArrows);
  };
  slider.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate);
  updateArrows();
}
