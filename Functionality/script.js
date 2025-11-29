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

// Store scroll position when modal opens
let savedScrollPosition = 0;

/**
    * Shows a modal depending on which button you clicked
    * @function openModal
    * @param {int} modalIndex - a number specifying and keeping track of which websites details you want
    * @returns {void}
*/
function openModal(modalIndex) {
    const modals = document.querySelectorAll('.projectModal');
    if(modals[modalIndex]) {
      // Save current scroll position
      savedScrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      
      modals[modalIndex].classList.remove('hideModal');
      // Prevent body and html scroll when modal is open
      document.body.classList.add('modal-open');
      document.documentElement.classList.add('modal-open');
      
      // Prevent scroll jump by setting the body's top position
      document.body.style.top = `-${savedScrollPosition}px`;
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
      // Restore body and html scroll when modal is closed
      document.body.classList.remove('modal-open');
      document.documentElement.classList.remove('modal-open');
      
      // Temporarily disable smooth scrolling for instant restoration
      const originalScrollBehavior = document.documentElement.style.scrollBehavior;
      document.documentElement.style.scrollBehavior = 'auto';
      
      // Restore scroll position and reset body top
      document.body.style.top = '';
      window.scrollTo(0, savedScrollPosition);
      
      // Restore smooth scrolling after restoration
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = originalScrollBehavior;
      }, 0);
    }
}


document.addEventListener("DOMContentLoaded", function () {
    const designs = document.querySelectorAll('.positioningForDesign');
    const prevBtn = document.getElementById('prevDesign');
    const nextBtn = document.getElementById('nextDesign');

    if (!prevBtn || !nextBtn || designs.length === 0) {
        return;
    }

    let startIndex = 0;
    let currentBreakpoint = getBreakpoint();

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

    function getStepSize(direction) {
        const bp = getBreakpoint();
        const visibleCount = getVisibleCount();
        const remaining = designs.length - (startIndex + visibleCount);
        const before = startIndex;

        if (direction === 'next') {
            if (bp === 'desktop') {
                // Desktop: move by 3, unless less than 3 left, then move by 2 or 1
                if (remaining >= 3) return 3;
                if (remaining >= 2) return 2;
                return remaining >= 1 ? 1 : 0;
            } else if (bp === 'tablet') {
                // Tablet: move by 2, unless only 1 left, then move by 1
                if (remaining >= 2) return 2;
                return remaining >= 1 ? 1 : 0;
            } else {
                // Mobile: move by 1
                return remaining >= 1 ? 1 : 0;
            }
        } else {
            // Previous direction
            if (bp === 'desktop') {
                // Desktop: move back by 3, unless less than 3 before, then move by 2 or 1
                if (before >= 3) return 3;
                if (before >= 2) return 2;
                return before >= 1 ? 1 : 0;
            } else if (bp === 'tablet') {
                // Tablet: move back by 2, unless only 1 before, then move by 1
                if (before >= 2) return 2;
                return before >= 1 ? 1 : 0;
            } else {
                // Mobile: move back by 1
                return before >= 1 ? 1 : 0;
            }
        }
    }

    nextBtn.addEventListener('click', () => {
        const step = getStepSize('next');
        if (step > 0) {
            startIndex += step;
            showDesigns();
        }
    });

    prevBtn.addEventListener('click', () => {
        const step = getStepSize('prev');
        if (step > 0) {
            startIndex -= step;
            showDesigns();
        }
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

/**
 * Updates WordPress demo button text based on screen width
 * @function updateWordPressButtonText
 * @returns {void}
 */
// Disabled - button text is now set in HTML and should not be overridden
// function updateWordPressButtonText() {
//     const wordpressButton = document.querySelector('.wordpressDemoButton');
//     if (wordpressButton) {
//         // Get the image element to preserve it
//         const img = wordpressButton.querySelector('img');
//         const newText = window.innerWidth <= 411 ? 'Demos' : 'Demo 1';
//         
//         // Replace text while preserving the image
//         if (img) {
//             wordpressButton.innerHTML = img.outerHTML + newText;
//         } else {
//             wordpressButton.textContent = newText;
//         }
//     }
// }

// Update button text on load and resize
// document.addEventListener('DOMContentLoaded', function() {
//     updateWordPressButtonText();
//     window.addEventListener('resize', updateWordPressButtonText);
// });