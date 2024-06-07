let docTitle = document.title;

window.addEventListener("focus", () => {
    document.title = docTitle;
});

window.addEventListener("blur", () => {
    document.title = "Come back 😥";
});