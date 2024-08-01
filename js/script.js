
let slideIndex = 0;
const slides = document.querySelectorAll('.banner-slide img');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % totalSlides;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); 


document.getElementById('contactForm').addEventListener('submit', function(event) {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const destination = document.getElementById('destination').value.trim();

    if (name === '' || email === '' || destination === '') {
        alert('Please fill out all fields.');
        event.preventDefault(); 
    } else {
        alert('Form submitted successfully!');
    }
});