const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const sliderimgs = document.querySelectorAll(".slider img");
const counterid = document.querySelector(".counter-id");
const galleryimgs = document.querySelector(".gallery-container");
galleryimgs.style.gridTemplateColumns = `repeat (${sliderimgs.length}, 1fr)`;

let currentimg = 0;

function GoToSlide (n) {
    sliderimgs[currentimg].classList.remove("active");
    currentimg = (n + sliderimgs.length) % sliderimgs.length;
    sliderimgs[currentimg].classList.add("active");

    UpdateSlider();
    UpdateThumbnailActiveState(currentimg);
}

prevBtn.addEventListener("click", () => {
    GoToSlide(currentimg - 1);
})

nextBtn.addEventListener("click", () => {
    GoToSlide(currentimg + 1);
})

sliderimgs.forEach((img, index) => {
    const thumbnail = img.cloneNode();
    thumbnail.addEventListener("click", () => {
        GoToSlide(index);
    });
    galleryimgs.appendChild(thumbnail);
})

function UpdateSlider () {
    prevBtn.disabled = currentimg === 0;
    nextBtn.disabled = currentimg === sliderimgs.length -1;
    counterid.innerHTML = `Image ${currentimg + 1} Of ${sliderimgs.length}`;
}
function UpdateThumbnailActiveState (index) {
    galleryimgs.querySelectorAll("img").forEach((img, i) => {
        img.classList.toggle("active", i === index);
    })
    }