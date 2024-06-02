import highlight from "@11ty/eleventy-plugin-syntaxhighlight";
import rss from "@11ty/eleventy-plugin-rss";
import bundle from "@11ty/eleventy-plugin-bundle";
import nav from "@11ty/eleventy-navigation";
import { EleventyHtmlBasePlugin } from "@11ty/eleventy";

export default function plugins(config) {
    config.addPlugin(rss);
    config.addPlugin(highlight, { preAttributes: { tabIndex: 0 } });
    config.addPlugin(nav);
    config.addPlugin(EleventyHtmlBasePlugin);
    config.addPlugin(bundle);
}
