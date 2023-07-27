/**
    * Opens the navigation menu
    * @function toggleMobileMenu
    * @param {string} menu - a classname that gets put onto the mobile menu
    * @returns {void}
*/
function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
}

/**
    * Turns all three divs (bars) border color in the the mobile menu pink simultaniously when hovering over one bar
    * @function turnPink
    * @returns {void}
*/
function turnPink() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
      bar.style.borderColor = 'hsl(330, 45%, 65%)';
    });
}

/**
    * Turns all three divs (bars) border color in the the mobile menu back to the original color simultaniously when the mouse isn't hovering over a bar
    * @function resetColor
    * @returns {void}
*/
function resetColor() {
    const bars = document.querySelectorAll('.bar');
    bars.forEach(bar => {
      bar.style.borderColor = 'hsl(240, 3%, 86.5%)';
    });
}

/**
    * Shows the rest of the content in the home section after clicking the read more button
    * @function showContent
    * @returns {void}
*/
function showContent() {
    const content = document.querySelector('.content');
    const readMoreButton = document.querySelector('.readMoreButton');

    content.style.display = 'block';
    readMoreButton.style.display = 'none';
}

/**
    * Hides the rest of the content in the home section after clicking the read more button
    * @function showContent
    * @returns {void}
*/
function hideContent() {
    const content = document.querySelector('.content');
    const readMoreButton = document.querySelector('.readMoreButton');

    content.style.display = 'none';
    readMoreButton.style.display = 'block';
}