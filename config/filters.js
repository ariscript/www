import markdown from "./markdown.js";

export function readableDate(date) {
    return new Date(date).toISOString().split("T")[0];
}

export default function filters(config) {
    config.addFilter("tags", (items) =>
        Array.from(new Set(items.data.flatMap((i) => i.data.tags ?? []))),
    );

    config.addFilter("readableDate", readableDate);

    config.addFilter("renderMd", (src) => markdown().render(src));
}
