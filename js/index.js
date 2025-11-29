// Testimonial Card JavaScript
// This file adds subtle interactivity to the testimonial card

document.addEventListener('DOMContentLoaded', function() {
    initTestimonialCard();
});

function initTestimonialCard() {
    const card = document.querySelector('.card');
    const avatar = document.querySelector('.card__avatar');

    // Add smooth hover effect to card
    if (card) {
        addCardHoverEffect(card);
    }

    // Add subtle avatar hover effect
    if (avatar) {
        addAvatarHoverEffect(avatar);
    }

    // Enhance accessibility
    enhanceAccessibility();
}

function addCardHoverEffect(card) {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';

    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
        this.style.boxShadow = '0px 4px 6px -1px rgba(0, 0, 0, 0.1), 0px 2px 4px -1px rgba(0, 0, 0, 0.1)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'var(--shadow-card)';
    });
}

function addAvatarHoverEffect(avatar) {
    avatar.style.transition = 'transform 0.3s ease';

    avatar.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });

    avatar.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
}

function enhanceAccessibility() {
    const card = document.querySelector('.card');
    
    if (card) {
        // Add keyboard navigation support
        card.setAttribute('tabindex', '0');
        
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                // Could trigger an action here if needed
            }
        });
    }
}

// Respect user's motion preferences
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
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
