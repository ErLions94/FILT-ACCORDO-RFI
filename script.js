document.addEventListener("DOMContentLoaded", function() {
    const sliderContainer = document.querySelector('.slider-container');

    // Aggiungi eventi di scorrimento laterale
    document.addEventListener('keydown', function(event) {
        if (event.key === 'ArrowRight') {
            scrollRight();
        } else if (event.key === 'ArrowLeft') {
            scrollLeft();
        }
    });

    function scrollRight() {
        sliderContainer.scrollLeft += window.innerWidth;
    }

    function scrollLeft() {
        sliderContainer.scrollLeft -= window.innerWidth;
    }
});
