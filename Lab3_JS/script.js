//select all thumbnail images and the main display image
const thumbnails = document.querySelectorAll('.thumb-img');
const mainImage = document.querySelector('#main-image');

//add a mouseover event listener to each thumbnail
thumbnails.forEach(thumb => {
    thumb.addEventListener('mouseover', function() {
        //get the URL from the 'data-full' attribute
        const fullSizeUrl = this.getAttribute('data-full');

        mainImage.src = fullSizeUrl;
        mainImage.alt = this.alt;

        mainImage.style.opacity = '0.8';
        setTimeout( () => {
            mainImage.style.opacity = '1';
        }, 100);
    });
});