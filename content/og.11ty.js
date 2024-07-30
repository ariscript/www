import satori from "satori";
import { Resvg } from "@resvg/resvg-js";
import { readFile } from "node:fs/promises";

const regular = await readFile("public/font/Inter-Regular.ttf");
const bold = await readFile("public/font/Inter-Bold.ttf");

export default class Og {
    data() {
        return {
            eleventyImport: {
                collections: ["og-image"],
            },
            pagination: {
                size: 1,
                data: "collections.og-image",
                alias: "item",
            },
            eleventyExcludeFromCollections: true,
            mdTemplateEngine: false,
            htmlTemplateEngine: false,
            eleventyComputed: {
                permalink: ({ item }) => {
                    let suffix = item.outputPath
                        .replace("/index.html", ".png")
                        .replace("./dist", "/");

                    if (suffix === "/.png") {
                        suffix = "/index.png";
                    }

                    return "img/og" + suffix;
                },
            },
        };
    }

    async render({ config, item }) {
        const svg = await satori(
            {
                type: "div",
                props: {
                    children: [
                        {
                            type: "div",
                            props: {
                                children: [
                                    {
                                        type: "div",
                                        props: {
                                            children: item.data.title,
                                            style: {
                                                fontSize: 32,
                                                fontWeight: "bold",
                                                marginBottom: 16,
                                            },
                                        },
                                    },
                                    {
                                        type: "div",
                                        props: {
                                            children: item.data.description,
                                            style: {
                                                fontSize: 20,
                                            },
                                        },
                                    },
                                ],
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                },
                            },
                        },
                        {
                            type: "div",
                            props: {
                                children: [
                                    {
                                        type: "img",
                                        props: {
                                            src: config.ogAvatar,
                                            width: 32,
                                            height: 32,
                                            style: {
                                                borderRadius: "50%",
                                            },
                                        },
                                    },
                                    {
                                        type: "div",
                                        props: {
                                            children: config.author.name,
                                            style: {
                                                fontSize: 20,
                                                margin: 16,
                                            },
                                        },
                                    },
                                ],
                                style: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    alignSelf: "flex-start",
                                    justifyContent: "center",
                                },
                            },
                        },
                    ],
                    style: {
                        height: "100%",
                        width: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        backgroundColor: "#24273a",
                        fontFamily: "Inter",
                        color: "#cad3f5",
                        padding: 16,
                    },
                },
            },
            {
                width: 600,
                height: 400,
                fonts: [
                    {
                        name: "Inter",
                        data: regular,
                        weight: 400,
                        style: "normal",
                    },
                    {
                        name: "Inter",
                        data: bold,
                        weight: 700,
                        style: "normal",
                    },
                ],
            },
        );

        const png = new Resvg(svg, { font: { loadSystemFonts: false } })
            .render()
            .asPng();

        return png;
    }
}
