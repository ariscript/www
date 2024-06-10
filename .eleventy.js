import prettier from "prettier";

import plugins from "./config/plugins.js";
import filters, { readableDate } from "./config/filters.js";
import markdown from "./config/markdown.js";

const OUT_DIR = "dist/";

export default function conf(config) {
    const md = markdown();

    config.addPassthroughCopy({
        "./public": "/",
    });
    config.addWatchTarget("content/**/*.{svg,png,jpeg,webp}");
    config.addWatchTarget("style/**/*.css");

    plugins(config);
    filters(config);
    config.setLibrary("md", md);

    config.addShortcode("buildDate", () => readableDate(new Date()));

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
