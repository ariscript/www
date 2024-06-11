const now = new Date();
const currentYear = now.getFullYear();

const start = new Date(`${currentYear}-04-09T00:00:00+1400`).getTime();
const end = new Date(`${currentYear}-04-10T00:00:00-1200`).getTime();

const currentTime = now.getTime();

if (currentTime >= start && currentTime < end) {
    document
        .querySelectorAll("style, link[rel=stylesheet]")
        .forEach((el) => el.parentElement?.removeChild(el));
}
