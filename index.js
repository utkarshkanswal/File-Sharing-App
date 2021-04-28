const dropZone = document.querySelector(".drop-zone");

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault()
    if (!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged");
    }

});
dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged");
})