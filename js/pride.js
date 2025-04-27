import { currentlyAnywhere } from "./time.js";

const PRIDE_START = "06-01";
const PRIDE_END = "06-30";
const CLASSES = ["trans", "nonbinary", "bi", "rainbow"];

const items = document.querySelectorAll("#name, #index-name");
const chosen = CLASSES[Math.floor(Math.random() * CLASSES.length)];

if (currentlyAnywhere(PRIDE_START, PRIDE_END)) {
    items.forEach((x) => x.classList.add("pride", chosen));
}
