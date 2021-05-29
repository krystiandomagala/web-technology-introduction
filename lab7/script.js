var galleryImg = document.querySelectorAll(".gallery-item");

galleryImg.forEach(item => {
    item.addEventListener("click", () => {
        var clone = item.cloneNode(true);
        clone.style.position = "absolute";
        console.log(this.getComputedStyle(item).getPropertyValue("height"));
        clone.style.top = "calc(50vh - " + this.getComputedStyle(item).getPropertyValue('height') + "/2)";
        clone.style.boxShadow = "100% 100% 30px #000";
        document.body.appendChild(clone);
    }); 
});