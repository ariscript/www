import { currentlyAnywhere } from "./time.js";

const CSS_NAKED_DAY = "04-09";

const notIgnored = (el) => el.getAttribute("data-css-naked-day") !== "ignore";

if (currentlyAnywhere(CSS_NAKED_DAY, CSS_NAKED_DAY)) {
    document
        .querySelectorAll("style, link[rel=stylesheet]")
        .forEach((el) => notIgnored(el) && el.replaceWith());

    document
        .querySelectorAll("[style]")
        .forEach((el) => notIgnored(el) && el.removeAttribute("style"));
}
