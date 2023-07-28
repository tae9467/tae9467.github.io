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
    * Shows the rest of the content after clicking the read more button in the section you button you clicked on is in
    * @function showContent
    * @returns {void}
*/
function showContent(clickedButton) {
    const contentSections = document.querySelectorAll('.content');
    const readMoreButtons = document.querySelectorAll('.readMoreButton');

    if(clickedButton == readMoreButtons[0]) {
        contentSections[0].style.display = 'block';
        clickedButton.style.display = 'none';
    } else if(clickedButton == readMoreButtons[1]) {
        contentSections[1].style.display = 'block';
        clickedButton.style.display = 'none';
    } else {
        contentSections[2].style.display = 'block';
        clickedButton.style.display = 'none';
    }
}

/**
    * Hides the rest of the content after clicking the read more button in the section you button you clicked on is in
    * @function hideContent
    * @returns {void}
*/
function hideContent(clickedButton) {
    const contentSections = document.querySelectorAll('.content');
    const readMoreButtons = document.querySelectorAll('.readMoreButton');
    const readLessButtons = document.querySelectorAll('.readLessButton');

    if(clickedButton == readLessButtons[0]) {
        contentSections[0].style.display = 'none';
        readMoreButtons[0].style.display = 'block';
    } else if(clickedButton == readLessButtons[1]) {
        contentSections[1].style.display = 'none';
        readMoreButtons[1].style.display = 'block';
    } else {
        contentSections[2].style.display = 'none';
        readMoreButtons[2].style.display = 'block';
    }
}