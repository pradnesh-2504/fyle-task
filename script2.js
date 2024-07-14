let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(${-index * 25}%)`;
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === index);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentSlide = i;
        showSlide(currentSlide);
    });
});

function autoSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);

    if (currentSlide === 0) {
        const firstSlide = document.querySelector('.slide:first-child');
        document.querySelector('.slides').appendChild(firstSlide);
        document.querySelector('.slides').style.transition = 'none';
        document.querySelector('.slides').style.transform = `translateX(0)`;
        currentSlide = slides.length - 1;
        setTimeout(() => {
            document.querySelector('.slides').style.transition = 'transform 0.5s ease-in-out';
        }, 0);
    }
}

setInterval(autoSlide, 3000); // Change slide every 3 seconds

showSlide(currentSlide);
