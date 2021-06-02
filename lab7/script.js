const imgItem = document.querySelectorAll('.lightbox-item');

imgItem.forEach(item => {
    item.addEventListener("click",openLightbox)
})

function openLightbox(){

    const inLightbox = document.querySelector(".lightbox-img");
    const lightboxContainer = document.querySelector(".lightbox-container");
    inLightbox.src = this.src;
    lightboxContainer.classList.add("lightbox-active");
}