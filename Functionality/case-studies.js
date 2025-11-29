/**
 * Shows/hides case studies based on URL parameter
 * @function showCaseStudy
 * @returns {void}
 */
function showCaseStudy() {
    const urlParams = new URLSearchParams(window.location.search);
    const studyParam = urlParams.get('study');
    const h2Title = document.querySelector('#case-studies h2');
    
    // Hide all case studies
    const allStudies = document.querySelectorAll('.caseStudy');
    allStudies.forEach(study => {
        study.classList.remove('active');
    });
    
    // Show the requested case study and update title
    if (studyParam) {
        let studyId = '';
        let titleText = '';
        switch(studyParam) {
            case 'portfolio':
                studyId = 'portfolio-study';
                titleText = 'Portfolio Case Study';
                break;
            case 'sca':
                studyId = 'sca-study';
                titleText = 'SCA Website Redesign Case Study';
                break;
            case 'teddy-bear':
                studyId = 'teddy-bear-study';
                titleText = 'Teddy Bear Finder Case Study';
                break;
            default:
                // If no valid parameter, show first study
                studyId = 'portfolio-study';
                titleText = 'Portfolio Case Study';
        }
        
        const targetStudy = document.getElementById(studyId);
        if (targetStudy) {
            targetStudy.classList.add('active');
            if (h2Title) {
                h2Title.textContent = titleText;
            }
        } else {
            // Fallback: show first study if target not found
            if (allStudies.length > 0) {
                allStudies[0].classList.add('active');
                if (h2Title) {
                    h2Title.textContent = 'Portfolio Case Study';
                }
            }
        }
    } else {
        // If no parameter, show first study
        if (allStudies.length > 0) {
            allStudies[0].classList.add('active');
            if (h2Title) {
                h2Title.textContent = 'Portfolio Case Study';
            }
        }
    }
}

/**
 * Scrolls to top of page
 * @function scrollToTop
 * @returns {void}
 */
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

/**
 * Shows/hides scroll to top button based on scroll position
 * @function toggleScrollButton
 * @returns {void}
 */
function toggleScrollButton() {
    const scrollButton = document.getElementById('scrollToTop');
    if (scrollButton) {
        if (window.pageYOffset > 300) {
            scrollButton.classList.remove('hidden');
        } else {
            scrollButton.classList.add('hidden');
        }
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    showCaseStudy();
    toggleScrollButton();
    
    // Show/hide scroll button on scroll
    window.addEventListener('scroll', toggleScrollButton);
});

