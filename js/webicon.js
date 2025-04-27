const DARK_OVERRIDE = {
    "github.com": "https://github.githubassets.com/favicons/favicon-dark.svg",
};

// Don't do icons on localhost because:
// a) spams a lot of requests to the API
// b) CORS is annoying and I don't want to deal with it
if (window.location.hostname !== "localhost") {
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

            const iconUrl = `https://webicon.ariscript.org/${encodeURIComponent(url.toString())}`;
            fetch(iconUrl).then(
                (r) =>
                    r.status === 200 &&
                    extLink.style.setProperty("--webicon", `url("${iconUrl}")`),
            );
        } catch {} // if the href is not valid, do nothing
    }
}
