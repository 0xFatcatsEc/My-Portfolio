// Wait for the DOM to be fully loaded
// Menu elements
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const menuIcon = document.querySelector('.menu-toggle i');

// Mobile menu toggle
menuToggle.onclick = function() {
    navLinks.classList.toggle('active');
    menuIcon.classList.toggle('fa-bars');
    menuIcon.classList.toggle('fa-times');
};

// Function to scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    const navHeight = document.querySelector('nav').offsetHeight;
    const targetPosition = section.offsetTop - navHeight;
    
    // Close mobile menu if open
    navLinks.classList.remove('active');
    menuIcon.classList.add('fa-bars');
    menuIcon.classList.remove('fa-times');
    
    // Scroll
    window.scroll({
        top: targetPosition,
        behavior: 'smooth'
    });
}

// Observe skills section elements
// Create Intersection Observer for animations
const animationObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                
                // Animate skills text
                if (element.classList.contains('skills-text')) {
                    element.querySelector('h2').style.animation = 'skillsFadeIn 0.8s ease-out forwards';
                    element.querySelector('p').style.animation = 'skillsFadeIn 0.8s ease-out forwards 0.2s';
                }
                
                // Animate grid container and its items
                if (element.classList.contains('grid-container')) {
                    element.style.animation = 'gridContainerFadeIn 0.8s ease-out forwards';
                    
                    // Animate grid items with delay
                    element.querySelectorAll('.grid-tools-1, .grid-tools-2, .grid-tools-3, .grid-tools-4').forEach((item, index) => {
                        item.style.animation = `skillsFadeIn 0.6s ease-out forwards ${0.6 + (index * 0.2)}s`;
                    });
                }
            }
        });
    },
    { threshold: 0.2 }
);

// Observe elements when page loads
document.addEventListener('DOMContentLoaded', () => {
    const skillsSection = document.querySelector('.skills-text');
    const gridContainer = document.querySelector('.grid-container');
    
    if (skillsSection) animationObserver.observe(skillsSection);
    if (gridContainer) animationObserver.observe(gridContainer);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about-con').forEach(element => {
        observer.observe(element);
    });
});

// Scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // About section animation
    gsap.from(".about-con", {
        scrollTrigger: {
            trigger: ".about-con",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".about-con img", {
        scrollTrigger: {
            trigger: ".about-con",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        scale: 0.5,
        rotation: 15,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.from(".grid-tools-1, .grid-tools-2, .grid-tools-3, .grid-tools-4", {
        scrollTrigger: {
            trigger: ".grid-container",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)"
    });

    gsap.from(".contact-mess-card, .contact-info-card", {
        scrollTrigger: {
            trigger: "#contact-section",
            start: "top 80%",
            end: "top 20%",
            toggleActions: "play none none reverse"
        },
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power4.out"
    });

    // Footer reveal animation
    gsap.from(".footer-content > *", {
        scrollTrigger: {
            trigger: ".footer",
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out"
    });
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            // Close mobile menu if open
            const navLinks = document.querySelector('.nav-links');
            const menuIcon = document.querySelector('.menu-toggle i');
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                menuIcon.classList.add('fa-bars');
                menuIcon.classList.remove('fa-times');
            }

            // Smooth scroll with bounce effect
            gsap.to(window, {
                duration: 1,
                scrollTo: {
                    y: target,
                    offsetY: 70
                },
                ease: "power4.out"
            });
        }
    });
});

// Parallax effect for background elements
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;

    // Parallax for hero section
    gsap.to(".bg-spline", {
        y: scrolled * 0.5,
        ease: "none"
    });
});

// Add hover animations for interactive elements
const cards = document.querySelectorAll('.grid-tools-1, .grid-tools-2, .grid-tools-3, .grid-tools-4');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        gsap.to(card, {
            y: -10,
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    card.addEventListener('mouseleave', () => {
        gsap.to(card, {
            y: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.in"
        });
    });
});