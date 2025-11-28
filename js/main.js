// Main JavaScript file for Cornfed Code website

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initMobileMenu();
    initScrollAnimations();
    initSkillBars();
    initContactForm();
    initSmoothScrolling();
    initVineHoverEffects();
});

// Mobile Menu Functionality
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMobile = document.querySelector('.nav-mobile');
    const navLinks = document.querySelectorAll('.nav-mobile .nav-link');

    if (mobileMenuBtn && navMobile) {
        mobileMenuBtn.addEventListener('click', function() {
            navMobile.classList.toggle('active');
            
            // Animate hamburger menu
            const spans = mobileMenuBtn.querySelectorAll('span');
            if (navMobile.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });

        // Close mobile menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMobile.classList.remove('active');
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                
                // Special handling for skill bars
                if (entry.target.classList.contains('skill-item')) {
                    animateSkillBar(entry.target);
                }
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animatedElements = document.querySelectorAll(`
        .feature-card,
        .service-card,
        .project-card,
        .testimonial-card,
        .skill-item,
        .stat-card,
        .philosophy-item,
        .timeline-item,
        .faq-item,
        .contact-method,
        .value-card,
        .expertise-card
    `);

    animatedElements.forEach(el => {
        el.classList.add('fade-in-up');
        observer.observe(el);
    });
}

// Skill Bars Animation
function initSkillBars() {
    // This will be triggered by the scroll observer
}

function animateSkillBar(skillItem) {
    const progressBar = skillItem.querySelector('.skill-progress');
    if (progressBar) {
        const width = progressBar.getAttribute('data-width');
        setTimeout(() => {
            progressBar.style.width = width;
        }, 200);
    }
}

// Contact Form Functionality
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const data = Object.fromEntries(formData);
            
            // Validate required fields
            if (!data.name || !data.email || !data.message) {
                alert('Please fill in all required fields.');
                return;
            }
            
            // Validate email
            if (!isValidEmail(data.email)) {
                alert('Please enter a valid email address.');
                return;
            }
            
            // Submit form via email
            submitContactForm(data);
        });
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function submitContactForm(data) {
    // Create email content
    const subject = encodeURIComponent(`New Project Inquiry from ${data.name}`);
    
    let body = `Hi Josh,\n\n`;
    body += `I'm interested in working with you on a project. Here are the details:\n\n`;
    body += `Name: ${data.name}\n`;
    body += `Email: ${data.email}\n`;
    
    if (data.company) body += `Company: ${data.company}\n`;
    if (data.phone) body += `Phone: ${data.phone}\n`;
    if (data['project-type']) body += `Project Type: ${data['project-type']}\n`;
    if (data.budget) body += `Budget Range: ${data.budget}\n`;
    if (data.timeline) body += `Timeline: ${data.timeline}\n`;
    if (data.referral) body += `How I heard about you: ${data.referral}\n`;
    
    body += `\nProject Details:\n${data.message}\n\n`;
    body += `Looking forward to hearing from you!\n\n`;
    body += `Best regards,\n${data.name}`;
    
    const encodedBody = encodeURIComponent(body);
    const mailtoLink = `mailto:josh.wiersema06@gmail.com?subject=${subject}&body=${encodedBody}`;
    
    // Open default email client
    window.location.href = mailtoLink;
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Vine Hover Effects Enhancement
function initVineHoverEffects() {
    const vineElements = document.querySelectorAll('.vine-hover');
    
    vineElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            // Add extra vine animation class
            this.classList.add('vine-active');
        });
        
        element.addEventListener('mouseleave', function() {
            // Remove extra vine animation class
            this.classList.remove('vine-active');
        });
    });
}

// Header Scroll Effect
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.style.background = 'rgba(254, 254, 254, 0.98)';
            header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.background = 'rgba(254, 254, 254, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Utility Functions
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

// Performance optimized scroll handler
const optimizedScrollHandler = throttle(function() {
    // Handle scroll-based animations here if needed
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

// Add loading animation for images
function initImageLoading() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.classList.add('loaded');
        });
        
        // If image is already loaded (cached)
        if (img.complete) {
            img.classList.add('loaded');
        }
    });
}

// Initialize image loading
initImageLoading();

// Add CSS for image loading animation
const style = document.createElement('style');
style.textContent = `
    img {
        opacity: 0;
        transition: opacity 0.3s ease;
    }
    
    img.loaded {
        opacity: 1;
    }
    
    .vine-active::before,
    .vine-active::after {
        animation: vineGrow 0.6s ease-out forwards;
    }
    
    @keyframes vineGrow {
        0% {
            transform: scale(0) rotate(-45deg);
            opacity: 0;
        }
        50% {
            transform: scale(0.7) rotate(-22deg);
            opacity: 0.7;
        }
        100% {
            transform: scale(1) rotate(0deg);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Add error handling for failed image loads
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        console.warn('Failed to load image:', e.target.src);
    }
}, true);

// Add keyboard navigation support
document.addEventListener('keydown', function(e) {
    // ESC key closes mobile menu
    if (e.key === 'Escape') {
        const navMobile = document.querySelector('.nav-mobile');
        if (navMobile && navMobile.classList.contains('active')) {
            navMobile.classList.remove('active');
            const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
            if (mobileMenuBtn) {
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }
});

// Add focus management for accessibility
function initAccessibility() {
    // Skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';
    skipLink.style.cssText = `
        position: absolute;
        top: -40px;
        left: 6px;
        background: var(--field-green);
        color: white;
        padding: 8px;
        text-decoration: none;
        border-radius: 4px;
        z-index: 1001;
        transition: top 0.3s;
    `;
    
    skipLink.addEventListener('focus', function() {
        this.style.top = '6px';
    });
    
    skipLink.addEventListener('blur', function() {
        this.style.top = '-40px';
    });
    
    document.body.insertBefore(skipLink, document.body.firstChild);
}

// Initialize accessibility features
initAccessibility();

// Mouse Trail Effect
function initMouseTrail() {
    // Don't initialize mouse trail on mobile devices
    if (window.innerWidth <= 768 || 'ontouchstart' in window) {
        return;
    }
    
    const trail = [];
    const maxTrailLength = 25;
    let mouseX = 0;
    let mouseY = 0;
    let animationSpeed = 0;
    
    // Create trail dots
    for (let i = 0; i < maxTrailLength; i++) {
        const dot = document.createElement('div');
        dot.className = 'mouse-trail-dot';
        dot.style.cssText = `
            position: fixed;
            width: 8px;
            height: 8px;
            background: #F4D03F;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            opacity: 0;
            transition: opacity 0.3s ease;
        `;
        document.body.appendChild(dot);
        trail.push({
            element: dot,
            x: 0,
            y: 0,
            age: 0
        });
    }
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate trail
    function animateTrail() {
        animationSpeed++;
        
        // Only update every 2 frames to slow it down
        if (animationSpeed % 2 !== 0) {
            requestAnimationFrame(animateTrail);
            return;
        }
        
        // Update trail positions
        for (let i = trail.length - 1; i > 0; i--) {
            trail[i].x = trail[i - 1].x;
            trail[i].y = trail[i - 1].y;
            trail[i].age = trail[i - 1].age + 1;
        }
        
        // Update first dot to mouse position
        trail[0].x = mouseX;
        trail[0].y = mouseY;
        trail[0].age = 0;
        
        // Apply positions and opacity
        trail.forEach((dot, index) => {
            const opacity = Math.max(0, 1 - (dot.age / maxTrailLength));
            const scale = Math.max(0.3, 1 - (dot.age / maxTrailLength));
            
            dot.element.style.left = dot.x - 4 + 'px';
            dot.element.style.top = dot.y - 4 + 'px';
            dot.element.style.opacity = opacity;
            dot.element.style.transform = `scale(${scale})`;
        });
        
        requestAnimationFrame(animateTrail);
    }
    
    animateTrail();
}

// Initialize mouse trail
initMouseTrail();

// Console message for developers
console.log(`
🌱 Cornfed Code Website
Built with love and modern web technologies
Contact: josh.wiersema06@gmail.com

This website features:
- Responsive design
- Smooth animations
- Accessibility features
- Performance optimizations
- Custom vine hover effects

Interested in working together? Get in touch!
`);