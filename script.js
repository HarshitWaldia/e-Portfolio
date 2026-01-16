// ============ PROJECT FILTERING ============
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCardsFilter = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');

        projectCardsFilter.forEach(card => {
            if (filterValue === 'all' || card.getAttribute('data-category') === filterValue) {
                card.style.display = 'block';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 10);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        });
    });
});

// ============ PROJECT CARD ANIMATIONS ============
const projectCards2 = document.querySelectorAll('.project-card');

projectCards2.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    card.style.transitionDelay = `${index * 0.08}s`;
});

// Animate cards on page load
window.addEventListener('load', () => {
    projectCards2.forEach(card => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

// ============ THEME TOGGLE ============
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

themeSwitch.addEventListener('change', () => {
    body.classList.toggle('dark-mode');
    localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeSwitch.checked = true;
}

// ============ MOBILE MENU ============
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ============ SMOOTH SCROLLING ============
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============ SCROLL ANIMATIONS ============
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ============ SKILL BARS ANIMATION ============
const skillBars = document.querySelectorAll('.skill-fill');

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const skillFill = entry.target;
            const width = skillFill.style.width;
            skillFill.style.width = '0';
            setTimeout(() => {
                skillFill.style.width = width;
            }, 200);
            skillsObserver.unobserve(skillFill);
        }
    });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
    skillsObserver.observe(bar);
});

// ============ FORM VALIDATION & SUBMISSION ============
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        
        let isValid = true;

        // Reset error messages
        document.querySelectorAll('.form-error').forEach(err => {
            err.classList.remove('show');
            err.textContent = '';
        });

        // Validate name
        if (!name.value.trim()) {
            showError(name, 'Name is required');
            isValid = false;
        }

        // Validate email
        if (!email.value.trim()) {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email');
            isValid = false;
        }

        // Validate message
        if (!message.value.trim()) {
            showError(message, 'Message is required');
            isValid = false;
        }

        if (isValid) {
            // Animate button
            const button = contactForm.querySelector('.btn-submit');
            const originalText = button.textContent;
            button.disabled = true;
            button.textContent = 'Sending...';
            
            try {
                // Submit to Formspree
                const response = await fetch('https://formspree.io/f/mkooonjo', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: name.value,
                        email: email.value,
                        message: message.value
                    })
                });

                if (response.ok) {
                    button.textContent = '✓ Message Sent!';
                    button.style.background = '#10b981';
                    
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        button.disabled = false;
                        contactForm.reset();
                    }, 2000);
                } else {
                    button.textContent = 'Error Sending';
                    button.style.background = '#ef4444';
                    setTimeout(() => {
                        button.textContent = originalText;
                        button.style.background = '';
                        button.disabled = false;
                    }, 2000);
                }
            } catch (error) {
                button.textContent = 'Error Sending';
                button.style.background = '#ef4444';
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.background = '';
                    button.disabled = false;
                }, 2000);
            }
        }
    });
}

function showError(input, message) {
    const errorSpan = input.parentElement.querySelector('.form-error');
    errorSpan.textContent = message;
    errorSpan.classList.add('show');
    input.style.borderColor = '#ef4444';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ============ NAVBAR SCROLL EFFECT ============
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = 'none';
    }
});

// ============ PROJECT CARD ANIMATIONS ============
const projectCardsAnim = document.querySelectorAll('.project-card');

projectCardsAnim.forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    card.style.transition = 'all 0.5s ease';
    card.style.transitionDelay = `${index * 0.1}s`;
});

// Animate cards on page load
window.addEventListener('load', () => {
    projectCardsAnim.forEach(card => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, 100);
    });
});

// ============ PARALLAX EFFECT ============
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroSection = document.querySelector('.hero-modern');
    if (heroSection) {
        heroSection.style.backgroundPosition = `0% ${scrolled * 0.5}px`;
    }
});

// ============ MOUSE FOLLOW EFFECT FOR HERO ============
const heroRight = document.querySelector('.hero-right');
if (heroRight) {
    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth - e.clientX * 2) / 100;
        const y = (window.innerHeight - e.clientY * 2) / 100;
        heroRight.style.transform = `translateX(${x * 5}px) translateY(${y * 5}px)`;
    });
}

