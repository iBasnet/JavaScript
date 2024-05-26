document.addEventListener("DOMContentLoaded", () => {
    const galleryContainer = document.getElementById("gallery-container");
    const galleryItems = ["Gallery1", "Gallery2", "Gallery3", "Gallery4", "Gallery5", "Gallery6"];

    galleryItems.forEach(item => {
        galleryContainer.innerHTML += `<div><h2>${item}</h2></div>`;
    });
});