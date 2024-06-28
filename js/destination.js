// destination.js
document.addEventListener('DOMContentLoaded', function() {
    const listItems = document.querySelectorAll('.destination li');
    const imageContainer = document.getElementById('image-container');

    listItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            showImages(this);
        });
        item.addEventListener('mouseout', function() {
            hideImages();
        });
    });

    function showImages(item) {
        const images = item.getAttribute('data-images').split(',');
        let imgIndex = 0;

        // Display the image container
        imageContainer.style.display = 'block';

        // Function to change the image
        const changeImage = () => {
            imageContainer.style.backgroundImage = `url(${images[imgIndex]})`;
            imgIndex = (imgIndex + 1) % images.length;
        };

        // Start changing images every 2 seconds
        changeImage(); // Show the first image immediately
        imageContainer.interval = setInterval(changeImage, 2000);
    }

    function hideImages() {
        imageContainer.style.display = 'none';
        clearInterval(imageContainer.interval);
    }
});