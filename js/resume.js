const toggle = document.getElementById("resume-toggle");

toggle.addEventListener("click", (e) =>
    document.body.classList[e.target.checked ? "add" : "remove"]("resume"),
);
