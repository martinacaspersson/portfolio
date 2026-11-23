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
