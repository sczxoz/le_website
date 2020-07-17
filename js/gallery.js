// Activate the image gallery.
// The main task is to attach an event listener to each image in the gallery
// and respond appropriately on click.

function activateGallery() {
  let thumbnails = document.querySelectorAll("#gallery-thumbs > div > img");
  let mainImage = document.querySelector("#gallery-photo > img");
  let galleryInfo = document.querySelector("#gallery-info");
  let imageTitle = galleryInfo.querySelector(".title");
  let imageDescription = galleryInfo.querySelector(".description");
  let currentClass = "current";

  thumbnails.forEach(function(thumbnail) {
    thumbnail.addEventListener("click", function() {
      // Set clicked image as main image.
      mainImage.setAttribute("alt", thumbnail.alt);
      mainImage.setAttribute("src", thumbnail.dataset.largeVersion);
      imageTitle.innerHTML = thumbnail.dataset.title;
      imageDescription.innerHTML = thumbnail.dataset.description;

      // Change which image is current.
      document.querySelector(`.${currentClass}`).classList.remove(`${currentClass}`);
      thumbnail.parentNode.classList.add(`${currentClass}`);
    });
  });
}