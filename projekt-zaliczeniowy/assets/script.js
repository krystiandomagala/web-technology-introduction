const hamburgerBtn = document.querySelector(".hamburger-menu");

hamburgerBtn.addEventListener("click",() => {
    const nav = document.querySelector("nav");
    nav.classList.toggle("invisible-menu");
});


const galleryItem = document.querySelectorAll(".gallery-item");
const hideBtn = document.querySelector(".hide-btn");
const forwards = document.querySelector(".forwards");
const backwards = document.querySelector(".backwards");
const inGallery = document.querySelector(".gallery-img");

galleryItem.forEach((item) => {
  item.addEventListener("click", openGallery);
});

hideBtn.addEventListener("click", closeGallery);

forwards.addEventListener("click", nextPhoto);

backwards.addEventListener("click", previousPhoto);

function openGallery() {
  const galleryContainer = document.querySelector(".gallery");
  inGallery.src = this.src;
  galleryContainer.classList.add("gallery-active");
}

function closeGallery() {
  const galleryContainer = document.querySelector(".gallery");
  galleryContainer.classList.remove("gallery-active");
}

function nextPhoto() {
  var src = inGallery.src;
  for (i = 0; i < galleryItem.length; i++)
    if (src == galleryItem[i].src) {
      if (i + 1 == galleryItem.length) inGallery.src = galleryItem[0].src;
      else inGallery.src = galleryItem[i + 1].src;
    }
}

function previousPhoto() {
    var src = inGallery.src;
    for (i = 0; i < galleryItem.length; i++)
      if (src == galleryItem[i].src) {
        if (i - 1 == -1) galleryItem.src = galleryItem[galleryItem.length - 1].src;
        else inGallery.src = galleryItem[i - 1].src;
      }
}