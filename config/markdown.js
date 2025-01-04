import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attribution from "markdown-it-attribution";
import figure from "markdown-it-image-figures";
import footnote from "markdown-it-footnote";
import katex from "@vscode/markdown-it-katex";
import iter from "markdown-it-for-inline";

import { createRequire } from "node:module";
import Shiki from "@shikijs/markdown-it";
const require = createRequire(import.meta.url);

const config = require("../data/config.json");

const md = new MarkdownIt({
    html: true,
    typographer: true,
    linkify: true,
})
    .use(anchor, {
        permalink: anchor.permalink.headerLink({
            class: "header-anchor",
            tabIndex: 0,
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
    .use(
        await Shiki({
            langs: ["haskell", "rust", "typescript"],
            themes: {
                light: "one-light",
                dark: "ayu-dark",
            },
        }),
    )
    .use(iter, "indieweb_icon", "link_open", (tokens, idx) => {
        try {
            const a = tokens[idx];
            const url = new URL(a.attrGet("href"));

            if (
                /https?:/.test(url.protocol) &&
                url.hostname != config.hostname
            ) {
                a.attrPush(["data-external-link", true]);
                a.attrPush(["target", "_blank"]);
            }
        } catch {
            // do nothing if href is not a valid URL
        }
    });

export default function markdown() {
    return md;
}
