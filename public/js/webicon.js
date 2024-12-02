const DARK_OVERRIDE = {
    "github.com": "https://github.githubassets.com/favicons/favicon-dark.svg",
};

for (const extLink of document.querySelectorAll(
    'a[data-external-link="true"]',
)) {
    try {
        const url = new URL(extLink.getAttribute("href"));

        if (url.hostname in DARK_OVERRIDE) {
            extLink.style.setProperty(
                "--webicon-dark",
                `url("${DARK_OVERRIDE[url.hostname]}")`,
            );
        }

        const iconUrl = `https://webicon.ariscript.org/${encodeURIComponent(
            `${url.protocol}//${url.hostname}`,
        )}`;
        fetch(iconUrl).then(
            (r) =>
                r.ok && extLink.style.setProperty("--webicon", `url("${url}")`),
        );
    } catch {} // if the href is not valid, do nothing
}
