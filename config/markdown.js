import MarkdownIt from "markdown-it";
import anchor from "markdown-it-anchor";
import attribution from "markdown-it-attribution";
import figure from "markdown-it-image-figures";
import footnote from "markdown-it-footnote";
import katex from "@vscode/markdown-it-katex";

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
    });

export default function markdown() {
    return md;
}
