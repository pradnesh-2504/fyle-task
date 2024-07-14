document.getElementById('contact-btn').addEventListener('click', function() {
    document.getElementById('contact-form-container').style.display = 'flex';
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
    document.getElementById('contact-form-container').style.display = 'none';
});
