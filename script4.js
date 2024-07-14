document.addEventListener('DOMContentLoaded', () => {
    const textItems = document.querySelectorAll('.text-item');
    const mainImage = document.getElementById('main-image');

    textItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove highlighted class from all items
            textItems.forEach(el => el.classList.remove('highlighted'));
            // Add highlighted class to clicked item
            item.classList.add('highlighted');
            // Change the main image source
            const newImageSrc = item.getAttribute('data-image');
            mainImage.src = newImageSrc;
        });
    });
});
