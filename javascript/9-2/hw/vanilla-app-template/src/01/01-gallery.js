import SimpleLightbox from "simplelightbox";
import { images } from "./images";
import { initImages } from "./gallery";

document.querySelector(".gallery").appendChild(initImages(images));

const lightbox = new SimpleLightbox("ul.gallery li a", {
    captionType: "alt",
    sourceAttr: "href",
    overlay: true,
});

lightbox.on('show.simplelightbox', function () {
	console.log("lightbox on")
});
