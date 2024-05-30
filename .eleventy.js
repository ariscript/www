import mdAnchor from "markdown-it-anchor";

import highlight from "@11ty/eleventy-plugin-syntaxhighlight";
import rss from "@11ty/eleventy-plugin-rss";
import bundle from "@11ty/eleventy-plugin-bundle";
import nav from "@11ty/eleventy-navigation";

import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

import katex from "@vscode/markdown-it-katex";
import prettier from "prettier";

const OUT_DIR = "dist/";

export default function conf(config) {
    config.addPassthroughCopy({
        "./public": "/",
    });

    config.addWatchTarget("content/**/*.{svg,png,jpeg,webp}");

    config.addPlugin(rss);
    config.addPlugin(highlight, { preAttributes: { tabIndex: 0 } });
    config.addPlugin(nav);
    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(bundle);

    config.addFilter("head", (array, n) => {
        if (!Array.isArray(array)) {
            return [];
        }

        if (n < 0) {
            return array.slice(n);
        }

        return array.slice(0, n);
    });

    config.addFilter("tags", (items) =>
        Array.from(new Set(items.data.flatMap((i) => i.data.tags ?? []))),
    );

    config.addShortcode(
        "buildDate",
        () => new Date().toISOString().split("T")[0],
    );

    config.amendLibrary("md", (lib) => {
        lib.use(mdAnchor, {
            permalink: mdAnchor.permalink.ariaHidden({
                placement: "before",
                class: "header-anchor",
                symbol: "#",
                ariaHidden: false,
            }),
            level: [1, 2, 3, 4],
            slugify: config.getFilter("slugify"),
        });

        lib.use(katex.default, {
            output: "mathml",
        });
    });

    config.addTransform("prettier", async function (content) {
        if (
            [".html", ".css", ".js"].some((x) =>
                this.page.outputPath.endsWith(x),
            )
        ) {
            return await prettier.format(content, {
                filepath: this.page.outputPath,
                tabWidth: 4,
                proseWrap: "always",
            });
        }

        return content;
    });

    return {
        templateFormats: ["md", "njk", "html", "11ty.js"],
        markdownTemplateEngine: "njk",
        htmlTemplateEngine: "njk",
        dir: {
            input: "content",
            output: OUT_DIR,
            includes: "../include", // top-level include directory
            data: "../data", // top-level data directory
        },
    };
}
