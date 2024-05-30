const { promisify } = require("node:util");
const { readFile } = require("node:fs/promises");
const licenseChecker = promisify(require("license-checker").init);
const MarkdownIt = require("markdown-it");

const md = new MarkdownIt().disable("code");

const PACKAGE_NAME = `${process.env["npm_package_name"]}@${process.env["npm_package_version"]}`;

class Licenses {
    data() {
        return {
            title: "OSS Licenses",
            layout: "layout/base.njk",
            head: '<link rel="stylesheet" href="/css/licenses.css" />',
        };
    }

    async render({}) {
        const packageData = await Promise.all(
            Object.entries(
                await licenseChecker({
                    json: true,
                    start: process.cwd(),
                }),
            )
                .filter(
                    ([packageName, info]) =>
                        packageName != PACKAGE_NAME &&
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

        return `
            <article>
                <h1>OSS Licenses</h1>

                <p>These are the open source libraries that were used to make this website:</p>

                <dl>
                    <section>
                        <dt>prism-themes@1.9.0</dt>
                        <dd>
                            ${md.render(`
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
                            ${md.render(license ?? "")}
                        </dd>
                    </section>
                `,
                    )
                    .join("")}
                </dl>
            </article>
        `;
    }
}

module.exports = Licenses;
