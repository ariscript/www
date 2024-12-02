const DARK_OVERRIDE = {
    "github.com": "https://github.githubassets.com/favicons/favicon-dark.svg",
};

for (const extLink of document.querySelectorAll(
    'a[data-external-link="true"]',
)) {
    try {
        const url = new URL(extLink.getAttribute("href"));

        if (url.hostname in DARK_OVERRIDE) {
            setIcon(extLink, DARK_OVERRIDE[url.hostname]);
            continue;
        }

        const iconUrl = `https://webicon.ariscript.org/${encodeURIComponent(
            `${url.protocol}//${url.hostname}`,
        )}`;
        fetch(iconUrl).then((r) => r.ok && setIcon(extLink, iconUrl));
    } catch {} // if the href is not valid, do nothing
}

function setIcon(el, url) {
    el.style.setProperty("--webicon", `url("${url}")`);
}
