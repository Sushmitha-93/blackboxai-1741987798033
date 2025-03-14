// Carousel Functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Initialize the carousel
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Add to Cart Functionality
let cartCount = 0;

document.querySelectorAll('.item button').forEach(button => {
    button.addEventListener('click', () => {
        cartCount++;
        document.getElementById('cart-icon').innerText = `🛒 ${cartCount}`;
        alert('Item added to cart!');
    });
});
