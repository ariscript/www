import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attribution from "markdown-it-attribution";
import figure from "markdown-it-image-figures";
import footnote from "markdown-it-footnote";
import katex from "@vscode/markdown-it-katex";
import iter from "markdown-it-for-inline";

import { createRequire } from "node:module";
const require = createRequire(import.meta.url);

const config = require("../data/config.json");

const darkReplacement = {
    "github.com": "https://github.githubassets.com/favicons/favicon-dark.svg",
};

const md = new MarkdownIt({
    html: true,
    typographer: true,
    linkify: true,
})
    .use(anchor, {
        permalink: anchor.permalink.ariaHidden({
            placement: "after",
            class: "header-anchor",
            symbol: "🔗",
            ariaHidden: false,
        }),
        level: [1, 2, 3, 4],
    })
    .use(katex.default, {
        output: "mathml",
    })
    .use(attribution, {
        marker: "--",
        removeMarker: true,
    })
    .use(footnote)
    .use(figure, {
        lazy: true,
        async: true,
        dataType: true,
        figcaption: "alt",
    })
    .use(iter, "indieweb_icon", "link_open", (tokens, idx) => {
        try {
            const url = new URL(tokens[idx].attrGet("href"));
            if (url.hostname === config.hostname) return;

            let style = tokens[idx].attrGet("style") ?? "";
            style += `--indieweb: url("https://v1.indieweb-avatar.11ty.dev/${encodeURIComponent(
                `${url.protocol}//${url.hostname}`,
            )}");`;

            if (url.hostname in darkReplacement) {
                style += `--indieweb-dark-override: url("${darkReplacement[url.hostname]}");`;
            }

            tokens[idx].attrPush(["style", style]);
        } catch {
            // do nothing if href is not a valid URL
        }
    });

export default function markdown() {
    return md;
}
