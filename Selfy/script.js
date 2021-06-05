const imgItem = document.querySelectorAll(".lightbox-item");
const lightboxBtn = document.querySelector(".inactive-lightbox");
const forwards = document.querySelector(".forwards-button");
const backwards = document.querySelector(".backwards-button");
const inLightbox = document.querySelector(".lightbox-img");

imgItem.forEach((item) => {
  item.addEventListener("click", openLightbox);
});

lightboxBtn.addEventListener("click", closeLightbox);

forwards.addEventListener("click", nextPhoto);

backwards.addEventListener("click", previousPhoto);

function openLightbox() {
  const lightboxContainer = document.querySelector(".lightbox-container");
  inLightbox.src = this.src;
  lightboxContainer.classList.add("lightbox-active");
}

function closeLightbox() {
  const lightboxContainer = document.querySelector(".lightbox-container");
  lightboxContainer.classList.remove("lightbox-active");
}

function nextPhoto() {
  var src = inLightbox.src;
  for (i = 0; i < imgItem.length; i++)
    if (src == imgItem[i].src) {
      if (i + 1 == imgItem.length) inLightbox.src = imgItem[0].src;
      else inLightbox.src = imgItem[i + 1].src;
    }
}

function previousPhoto() {
    var src = inLightbox.src;
    for (i = 0; i < imgItem.length; i++)
      if (src == imgItem[i].src) {
        if (i - 1 == -1) inLightbox.src = imgItem[imgItem.length - 1].src;
        else inLightbox.src = imgItem[i - 1].src;
      }
}
