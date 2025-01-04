import rss from "@11ty/eleventy-plugin-rss";
import bundle from "@11ty/eleventy-plugin-bundle";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function plugins(config) {
    config.addPlugin(rss);
    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(bundle);
}
