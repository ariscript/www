const CSS_NAKED_DAY = "04-09";

const notIgnored = (el) => el.getAttribute("data-css-naked-day") !== "ignore";

const now = new Date();
const year = now.getFullYear();
const time = now.getTime();

const start = new Date(`${year}-${CSS_NAKED_DAY}T00:00:00+1400`).getTime();
const end = new Date(`${year}-${CSS_NAKED_DAY}T23:59:59-1200`).getTime();

if (time >= start && time <= end) {
    document
        .querySelectorAll("style, link[rel=stylesheet]")
        .forEach((el) => notIgnored(el) && el.replaceWith());

    document
        .querySelectorAll("[style]")
        .forEach((el) => notIgnored(el) && el.removeAttribute("style"));
}
