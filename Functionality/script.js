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
    * @param {string} clickedButton - a classname that gets put onto the clicked button
    * @returns {void}
*/
function showContent(clickedButton) {
    const contentSections = document.querySelectorAll('.content');
    const readMoreButtons = document.querySelectorAll('.readMoreButton');

    const aboutMeSectionBorder = document.querySelector('.borderSectionImg');
    const aboutMeSectionBorderLong = document.querySelector('.borderSectionImgLong');

    if(clickedButton == readMoreButtons[0]) {
        contentSections[0].style.display = 'block';
        clickedButton.style.display = 'none';
        aboutMeSectionBorder.style.display = 'none';
        aboutMeSectionBorderLong.style.display = 'block';
    } else if(clickedButton == readMoreButtons[1]) {
        contentSections[1].style.display = 'block';
        clickedButton.style.display = 'none';
    } else if(clickedButton == readMoreButtons[2]) {
        contentSections[2].style.display = 'block';
        clickedButton.style.display = 'none';
      } else if(clickedButton == readMoreButtons[3]) {
        contentSections[3].style.display = 'block';
        clickedButton.style.display = 'none';
    } else {
        contentSections[4].style.display = 'block';
        clickedButton.style.display = 'none';
    }
}

/**
    * Hides the rest of the content after clicking the read more button in the section you button you clicked on is in
    * @function hideContent
    * @param {string} clickedButton - a classname that gets put onto the clicked button
    * @returns {void}
*/
function hideContent(clickedButton) {
    const contentSections = document.querySelectorAll('.content');
    const readMoreButtons = document.querySelectorAll('.readMoreButton');
    const readLessButtons = document.querySelectorAll('.readLessButton');

    const aboutMeSectionBorder = document.querySelector('.borderSectionImg');
    const aboutMeSectionBorderLong = document.querySelector('.borderSectionImgLong');

    if(clickedButton == readLessButtons[0]) {
        contentSections[0].style.display = 'none';
        readMoreButtons[0].style.display = 'block';
        aboutMeSectionBorder.style.display = 'block';
        aboutMeSectionBorderLong.style.display = 'none';
    } else if(clickedButton == readLessButtons[1]) {
        contentSections[1].style.display = 'none';
        readMoreButtons[1].style.display = 'block';
    } else if(clickedButton == readLessButtons[2]) {
        contentSections[2].style.display = 'none';
        readMoreButtons[2].style.display = 'block';
   } else if(clickedButton == readLessButtons[3]) {
        contentSections[3].style.display = 'none';
        readMoreButtons[3].style.display = 'block';
    } else {
        contentSections[4].style.display = 'none';
        readMoreButtons[4].style.display = 'block';
    }
}

/**
    * Shows a modal depending on which button you clicked
    * @function openModal
    * @param {int} modalIndex - a number specifying and keeping track of which websites details you want
    * @returns {void}
*/
function openModal(modalIndex) {
    const modals = document.querySelectorAll('.projectModal');
    if(modals[modalIndex]) {
      modals[modalIndex].classList.remove('hideModal');
    }
  }

/**
    * Closes a modal depending on which button you clicked
    * @function closeModal
    * @param {int} modalIndex - a number specifying and keeping track of which websites details you want
    * @returns {void}
*/
function closeModal(modalIndex) {
    const modals = document.querySelectorAll('.projectModal');
    if(modals[modalIndex]) {
      modals[modalIndex].classList.add('hideModal');
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const designs = document.querySelectorAll('.positioningForDesign');
    const prevBtn = document.getElementById('prevDesign');
    const nextBtn = document.getElementById('nextDesign');
    let startIndex = 0;
    let currentBreakpoint = getBreakpoint();

    function spawnRose(x, y) {
        const rose = document.createElement('img');
        rose.src = './Resources/Images/rose.png';
        rose.className = 'floatingRose';
        
        // random horizontal offset ±20px
        const offsetX = Math.random() * 40 - 20;
        rose.style.left = (x + offsetX) + 'px';
        rose.style.top = y + 'px';
        
        document.body.appendChild(rose);
    
        rose.addEventListener('animationend', () => {
            rose.remove();
        });
    }
       

    function getBreakpoint() {
        const width = window.innerWidth;
        if (width <= 611) return 'mobile';
        if (width <= 1000) return 'tablet';
        return 'desktop';
    }

    function getVisibleCount() {
        const bp = getBreakpoint();
        return bp === 'mobile' ? 1 : bp === 'tablet' ? 2 : 3;
    }

    function showDesigns() {
        const visibleCount = getVisibleCount();

        // Clamp startIndex
        if (startIndex + visibleCount > designs.length) {
            startIndex = Math.max(0, designs.length - visibleCount);
        }

        designs.forEach((design, i) => {
            design.style.display = (i >= startIndex && i < startIndex + visibleCount) ? 'block' : 'none';
        });

        updateArrows();
    }

    function updateArrows() {
        const visibleCount = getVisibleCount();
        prevBtn.classList.toggle('disabled', startIndex === 0);
        nextBtn.classList.toggle('disabled', startIndex + visibleCount >= designs.length);
    }

    nextBtn.addEventListener('click', () => {
        if (startIndex + 1 < designs.length) startIndex++;
        showDesigns();

        // spawn rose at arrow position
        const rect = nextBtn.getBoundingClientRect();
        spawnRose(rect.left + rect.width/2, rect.top);
    });

    prevBtn.addEventListener('click', () => {
        if (startIndex > 0) startIndex--;
        showDesigns();

        // spawn rose at arrow position
        const rect = prevBtn.getBoundingClientRect();
        spawnRose(rect.left + rect.width/2, rect.top);
    });

    // Only reload on breakpoint change
    window.addEventListener('resize', () => {
        const newBreakpoint = getBreakpoint();
        if (newBreakpoint !== currentBreakpoint) {
            currentBreakpoint = newBreakpoint;
            showDesigns();
        }
    });

    showDesigns();
});
