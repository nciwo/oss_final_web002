let docTitle = document.title;

window.addEventListener("focus", () => {
    document.title = docTitle;
});

window.addEventListener("blur", () => {
    document.title = "Come back 😥";
});

window.addEventListener("resize", () => {
    document.getElementById("container").style.height = window.innerHeight + "px";
    document.getElementById("container").style.width = window.innerWidth + "px";
});