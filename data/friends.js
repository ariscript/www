import { readdir } from "node:fs/promises";
import { resolve, basename, relative } from "node:path";

const IMG_PATH = resolve("public", "img", "friends");

export default async () => ({
    icons: new Map(
        shuffle(await readdir(IMG_PATH)).map((image) => [
            basename(image, image.slice(image.lastIndexOf("."))),
            "/" + relative("public", resolve(IMG_PATH, image)),
        ]),
    ),
    links: new Map(
        shuffle([
            ["Owen Duckham", "https://owen.foo/"],
            ["Elaine Zhu", "https://elaine.foo/"],
            ["amy erskine", "https://amy.is-a.dev/"],
            ["alessandra simmons", "https://adrs.pub/"],
            ["Julia Keadey", "https://sylkos.xyz/"],
            ["Will Kibel", "https://wwwill.org/"],
            ["Hazel Torek", "https://hazeltorek.github.io/"],
        ]),
    ),
});

function shuffle(array) {
    let currentIndex = array.length;

    while (currentIndex != 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ];
    }

    return array;
}
