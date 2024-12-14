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

            <p>
                The <em>code</em> powering this website is
                <a href="${config.repoUrl}">open source</a>
                and licensed under
                <a href="https://www.gnu.org/licenses/agpl-3.0.html">AGPL 3.0 or later</a>.
                <br />
                The <em>content</em> on this website are licensed under
                <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/">CC-BY-NC-SA 4.0</a>
                unless otherwise mentioned on the page.
                <br />
                Refer to the repository README for a definition of what constitutes content.
            </p>

            <p>These are the open source libraries that were used to make this website:</p>

            <dl>
                <section>
                    <dt>prism-themes@1.9.0</dt>
                    <dd>
                        ${this.renderMd(`
                        The MIT License (MIT)

                        Copyright (c) 2015 PrismJS

                        Permission is hereby granted, free of charge, to any person obtaining a copy
                        of this software and associated documentation files (the "Software"), to deal
                        in the Software without restriction, including without limitation the rights
                        to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
                        copies of the Software, and to permit persons to whom the Software is
                        furnished to do so, subject to the following conditions:

                        The above copyright notice and this permission notice shall be included in all
                        copies or substantial portions of the Software.

                        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
                        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
                        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
                        AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
                        LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
                        OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
                        SOFTWARE.`)}
                    </dd>
                </section>

            ${packageData
                .map(
                    ([packageName, license]) => `
                <section>
                    <dt>${packageName}</dt>

                    <dd>
                        ${this.renderMd(license ?? "")}
                    </dd>
                </section>
            `,
                )
                .join("")}
            </dl>
        `;
    }
}
