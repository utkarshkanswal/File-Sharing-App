const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browse = document.querySelector(".browse");

dropZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    if (!dropZone.classList.contains("dragged")) {
        dropZone.classList.add("dragged");
    }

});
dropZone.addEventListener("dragleave", () => {
    dropZone.classList.remove("dragged");
});
dropZone.addEventListener("drop", (e) => {
    e.preventDefault();
    dropZone.classList.remove("dragged");
    const files = e.dataTransfer.files;
    console.log(files);
    if (files.length) {
        fileInput.files = files;
    }
});

browse.addEventListener("click", () => {
    fileInput.click();
});