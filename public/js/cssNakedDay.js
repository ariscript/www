const cssNakedDay = "04-09";

const now = new Date();
const currentYear = now.getFullYear();

const start = new Date(`${currentYear}-${cssNakedDay}T00:00:00+1400`).getTime();
const end = new Date(`${currentYear}-${cssNakedDay}T23:59:59-1200`).getTime();

const currentTime = now.getTime();

if (currentTime >= start && currentTime <= end) {
    document
        .querySelectorAll("style, link[rel=stylesheet]")
        .forEach((el) => el.parentElement?.removeChild(el));
}
