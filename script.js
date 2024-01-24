function toggleText() {
    var smallScreenText = document.querySelector('.small-screen-text');
    var largeScreenText = document.querySelector('.large-screen-text');

    if (smallScreenText.style.display === 'block') {
        smallScreenText.style.display = 'none';
        largeScreenText.style.display = 'block';
    } else {
        smallScreenText.style.display = 'block';
        largeScreenText.style.display = 'none';
    }
}
