
const images = [
    {
        title: "Messi en el Barca",
        description: "'El club de mis amores.'",
        src: "./images/messi.barca.jfif"
    },
    {
        title: "Messi en el PSG",
        description: "'Nunca me senti bien recibido.'",
        src: "./images/messi.psg.jpg"
    },
    {
        title: "Messi en el Inter de Miami",
        description: "'El lugar donde soy feliz.'",
        src: "./images/inter miami.messi.jpeg"
    }
];

let currentIndex = 0; 


const carouselImage = document.getElementById('carouselImage');
const carouselTitle = document.getElementById('carouselTitle');
const carouselDescription = document.getElementById('carouselDescription');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');


function updateCarousel() {
    carouselImage.src = images[currentIndex].src;
    carouselTitle.textContent = images[currentIndex].title;
    carouselDescription.textContent = images[currentIndex].description;
}


function showPrevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateCarousel();
}


function showNextImage() {
    currentIndex = (currentIndex === images.length - 1) ? 0 : currentIndex + 1;
    updateCarousel();
}


prevBtn.addEventListener('click', showPrevImage);
nextBtn.addEventListener('click', showNextImage);



updateCarousel();