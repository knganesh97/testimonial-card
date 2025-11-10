// Testimonial Card JavaScript
// This file adds interactivity to the testimonial card

document.addEventListener('DOMContentLoaded', function() {
    // Initialize testimonial card functionality
    initTestimonialCard();
});

function initTestimonialCard() {
    // Get testimonial elements
    const testimonialCard = document.querySelector('.testimonial-card');
    const profileImage = document.querySelector('.profile-image');
    const testimonialText = document.querySelector('.testimonial-text');
    const authorName = document.querySelector('.author-name');
    const authorHandle = document.querySelector('.author-handle');

    // Add hover effects to the testimonial card
    if (testimonialCard) {
        testimonialCard.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
        });

        testimonialCard.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    }

    // Add smooth transitions to all interactive elements
    addSmoothTransitions();

    // Handle responsive behavior
    handleResponsiveFeatures();

    // Add accessibility enhancements
    enhanceAccessibility();
}

function addSmoothTransitions() {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
        testimonialCard.style.transition = 'all 0.3s ease';
    }

    // Add transitions to profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.style.transition = 'transform 0.3s ease';
        
        profileImage.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.05)';
        });

        profileImage.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    }
}

function handleResponsiveFeatures() {
    // Handle responsive text sizing
    function adjustTextSize() {
        const testimonialText = document.querySelector('.testimonial-text');
        if (!testimonialText) return;

        const screenWidth = window.innerWidth;
        
        if (screenWidth < 768) {
            // Mobile adjustments
            testimonialText.style.fontSize = '14px';
            testimonialText.style.lineHeight = '1.6';
        } else if (screenWidth < 1024) {
            // Tablet adjustments
            testimonialText.style.fontSize = '16px';
            testimonialText.style.lineHeight = '1.5';
        } else {
            // Desktop adjustments
            testimonialText.style.fontSize = '18px';
            testimonialText.style.lineHeight = '1.6';
        }
    }

    // Initial adjustment
    adjustTextSize();

    // Adjust on resize
    window.addEventListener('resize', adjustTextSize);
}

function enhanceAccessibility() {
    const testimonialCard = document.querySelector('.testimonial-card');
    if (testimonialCard) {
        // Add ARIA labels and roles
        testimonialCard.setAttribute('role', 'article');
        testimonialCard.setAttribute('aria-label', 'Customer testimonial');
        
        // Add keyboard navigation support
        testimonialCard.setAttribute('tabindex', '0');
        
        testimonialCard.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
    }

    // Enhance profile image accessibility
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.setAttribute('alt', 'Profile picture of testimonial author');
    }
}

// Utility function to animate text reveal
function animateTextReveal(element, delay = 0) {
    if (!element) return;
    
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    element.style.transition = 'all 0.6s ease';
    
    setTimeout(() => {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, delay);
}

// Function to handle card loading animation
function animateCardLoad() {
    const testimonialCard = document.querySelector('.testimonial-card');
    const profileImage = document.querySelector('.profile-image');
    const testimonialText = document.querySelector('.testimonial-text');
    const authorInfo = document.querySelector('.author-info');

    // Animate elements in sequence
    setTimeout(() => animateTextReveal(testimonialCard), 100);
    setTimeout(() => animateTextReveal(profileImage), 300);
    setTimeout(() => animateTextReveal(testimonialText), 500);
    setTimeout(() => animateTextReveal(authorInfo), 700);
}

// Call animation on load
window.addEventListener('load', animateCardLoad);

// Handle prefers-reduced-motion for accessibility
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    // Disable animations for users who prefer reduced motion
    const style = document.createElement('style');
    style.textContent = `
        *, *::before, *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
        }
    `;
    document.head.appendChild(style);
}
