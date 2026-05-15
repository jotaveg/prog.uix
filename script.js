/* ============================================
   Global JavaScript
   Basic UI interactions
   ============================================ */

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const mobileNav = document.getElementById('mobileNav');

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            mobileNav.classList.toggle('active');
        });

        // Close menu when a link is clicked
        const mobileLinks = mobileNav.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            });
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (hamburger && mobileNav) {
            if (!event.target.closest('.hamburger') && !event.target.closest('.mobile-nav')) {
                hamburger.classList.remove('active');
                mobileNav.classList.remove('active');
            }
        }
    });
});

// Logo click to go home
document.addEventListener('DOMContentLoaded', function() {
    const logos = document.querySelectorAll('.logo');
    logos.forEach(logo => {
        if (!logo.href) {
            logo.style.cursor = 'pointer';
            logo.addEventListener('click', function() {
                window.location.href = 'index.html';
            });
        }
    });
});
