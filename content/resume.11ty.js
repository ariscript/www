export default class ResumeScript {
    data() {
        return {
            eleventyExcludeFromCollections: true,
            mdTemplateEngine: false,
            htmlTemplateEngine: false,
            permalink: "/js/resume.js",
        };
    }

    render({ config }) {
        return `
            const toggle = document.getElementById("resume-toggle");

            toggle.addEventListener("click", (e) => {
                if (e.target.checked) {
                    document.body.classList.add("resume");
                    document.title = "Résumé | ${config.author.name}";
                } else {
                    document.body.classList.remove("resume");
                    document.title = "CV | ${config.author.name}";
                }
            });
        `;
    }
}
