import { promisify } from "node:util";
import { readFile } from "node:fs/promises";

const licenseChecker = promisify((await import("license-checker")).init);

const PACKAGE_NAME = `${process.env["npm_package_name"]}@${process.env["npm_package_version"]}`;

export default class Licenses {
    data() {
        return {
            title: "OSS Licenses",
            description:
                "The open source libraries that make this website work",
            layout: "layout/base.njk",
        };
    }

    async render({ config }) {
        const packageData = await Promise.all(
            Object.entries(
                await licenseChecker({
                    json: true,
                    start: process.cwd(),
                }),
            )
                .filter(
                    ([packageName, info]) =>
                        packageName !== PACKAGE_NAME &&
                        /.*\/.*?license[^\/]*$/i.test(info.licenseFile ?? ""),
                )
                .map(async ([packageName, info]) => [
                    packageName,
                    (
                        await readFile(info.licenseFile ?? "", {
                            encoding: "utf-8",
                        })
                    ).replaceAll(/<(.*)>/g, "&lt;$1&gt;"),
                ]),
        );

        this.css(await readFile("style/licenses.css", "utf-8"));

        return `
            <h1>OSS Licenses</h1>

            ${this.renderMd(`
            The _code_ powering this website is [open source](${config.repoUrl})
            and licensed under
            [AGPL 3.0 or later](https://gnu.org/licenses/agpl-3.0.html). The
            _content_ on this website are licensed under
            [CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)
            unless otherwise mentioned. Refer to the repository README for what
            constitutes content.

            Additionally, the code powering the icons on external links is also
            [open source](https://github.com/ariscript/webicon) and licensed under
            AGPL 3.0 or later.

            These are the open source libraries that were used to make this website:
            `)}

            <dl>
            ${packageData
                .map(
                    ([packageName, license]) => `
                <dt>${packageName}</dt>
                <dd>
                    ${this.renderMd(license ?? "")}
                </dd>`,
                )
                .join("")}
            </dl>
        `;
    }
}
