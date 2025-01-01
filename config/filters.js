import markdown from "./markdown.js";

export function readableDate(date) {
    return new Date(date).toISOString().split("T")[0];
}

export default function filters(config) {
    config.addFilter("tags", (items) =>
        Array.from(new Set(items.data.flatMap((i) => i.data.tags ?? []))),
    );

    config.addFilter("filterTags", (tags) =>
        // filter out tags that are for internal organization
        (tags ?? []).filter((t) => !["posts", "og-image"].includes(t)),
    );

    config.addFilter("feed", (posts) => posts.filter((p) => !p.data.hidden));

    config.addFilter("take", (items, n) => items.slice(0, n));

    config.addFilter("readableDate", readableDate);

    config.addFilter("renderMd", (src) => markdown().render(src));
}
