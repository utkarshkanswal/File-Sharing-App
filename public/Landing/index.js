const dropZone = document.querySelector(".drop-zone");
const fileInput = document.querySelector("#fileInput");
const browse = document.querySelector(".browse");
const progressbar = document.querySelector(".progress-bar");
const percentdiv = document.querySelector("#percent");
// const downloadlink = document.querySelector(".link");
const progresscontainer = document.querySelector(".progress-container");
const downloadcontainer = document.querySelector(".download-container");
const percentcontainer = document.querySelector(".percent-container");
const uploadtitle = document.querySelector(".upload-title");
const copyicon = document.querySelector(".copy-icon");
const message = document.querySelector(".message");
const fileurl = document.querySelector("#fileurl");


const host = "http://localhost:3000/";
const uploadUrl = `${host}api/files`;


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
    // console.log(files.length);
    if (files.length) {
        fileInput.files = files;
        progresscontainer.classList.add("dragged");
        downloadcontainer.classList.add("dragged");
        percentcontainer.style.display = `block`;
        uploadtitle.style.display = `block`;
        message.style.display = `block`;
        copyicon.style.display = `block`;
        fileurl.style.display = 'block';
        uploadFile();
    }
});

fileInput.addEventListener("change", () => {
    progresscontainer.classList.add("dragged");
    downloadcontainer.classList.add("dragged");
    percentcontainer.style.display = `block`;
    uploadtitle.style.display = `block`;
    message.style.display = `block`;
    copyicon.style.display = `block`;
    fileurl.style.display = 'block';
    uploadFile();
});
browse.addEventListener("click", () => {
    fileInput.click();
});

const uploadFile = () => {

    const file = fileInput.files[0];
    // console.log(file);
    const formData = new FormData();
    formData.append("myfile", file);
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            console.log(xhr.response);
            showLink(JSON.parse(xhr.response));
        }

    };
    xhr.upload.onprogress = updateProgress;


    xhr.open("POST", uploadUrl, true);
    xhr.send(formData);
}

const updateProgress = (e) => {
    const percent = Math.round(((e.loaded) / (e.total)) * 100);
    console.log(percent);
    progressbar.style.transform = `scaleX(${percent/100})`;
    percentdiv.innerText = percent;
}

const showLink = ({
    file
}) => {
    console.log(file);
    // downloadlink.innerText = file;
    fileurl.value = file;
}

copyicon.addEventListener("click", () => {
    fileurl.select();
    document.execCommand("copy");
});