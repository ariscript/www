document
    .querySelectorAll("a.header-anchor")
    .forEach((a) =>
        a.addEventListener("click", (_) =>
            navigator.clipboard.writeText(
                new URL(a.href, location.href).toString(),
            ),
        ),
    );
