/* ==========================================================================
   FUTURISTIC JAVASCRIPT PORFTOLIO SUITE - HARSHIT WALDIA
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // Start Preloader Diagnostic Sequence Immediately
    initPreloader();
});

// ==========================================================================
// 1. FUTURISTIC SYSTEM PRELOADER ENGINE
// ==========================================================================
function initPreloader() {
    const preloader = document.getElementById('preloader');
    const terminalBody = document.getElementById('terminal-body');
    const progressBar = document.getElementById('progress-bar-fill');
    
    if (!preloader || !terminalBody || !progressBar) return;
    
    // Diagnostic Log Stream lines
    const logs = [
        { text: '► INITIALIZING HARSHIT_WALDIA_OS CORE v4.0...', type: 'info' },
        { text: '► VERIFYING SYSTEM STABILITY...', type: 'info' },
        { text: '  [✓] RAM CACHE ALLOCATED: 16384 MB', type: 'success' },
        { text: '  [✓] WEB RENDER ENGINE: WEBGL2 DETECTED', type: 'success' },
        { text: '► MOUNTING ML & DEEP LEARNING LIBRARIES...', type: 'info' },
        { text: '  [✓] TENSORFLOW CORE STACK: ONLINE', type: 'success' },
        { text: '  [✓] PYTORCH NEURAL INTEGRATOR: ONLINE', type: 'success' },
        { text: '  [✓] OPENCV IMAGE ARRAYS LOADED', type: 'success' },
        { text: '► INTEGRATING AUTONOMOUS AGENT CHASSIS...', type: 'info' },
        { text: '  [✓] LANGGRAPH CYCLIC WORKFLOW ENGINE: NOMINAL', type: 'success' },
        { text: '  [!] DYNAMIC TOKEN CACHE LIMIT: UNLIMITED', type: 'warning' },
        { text: '► PARSING DATABASE SCHEMAS...', type: 'info' },
        { text: '  [✓] POSTGRESQL POOL STABILIZED', type: 'success' },
        { text: '  [✓] FASTAPI ENDPOINT INJECTORS READY', type: 'success' },
        { text: '► SYNCHRONIZING SECURE ENCRYPTORS...', type: 'info' },
        { text: '  [✓] JWT AUTHORIZATION MATRIX ACTIVE', type: 'success' },
        { text: '► DIAGNOSTIC CHECK: 100%nominal. BOOT SEQUENCE FINALIZED.', type: 'success' }
    ];

    let currentLogIndex = 0;
    let progress = 0;
    
    // Faster log-stream speed
    const logInterval = setInterval(() => {
        if (currentLogIndex < logs.length) {
            const log = logs[currentLogIndex];
            const p = document.createElement('p');
            p.className = `terminal-log ${log.type}`;
            p.innerHTML = log.text;
            terminalBody.appendChild(p);
            
            // Auto scroll terminal log window
            terminalBody.scrollTop = terminalBody.scrollHeight;
            
            // Advance progress bar incrementally
            progress = Math.min(((currentLogIndex + 1) / logs.length) * 100, 95);
            progressBar.style.width = `${progress}%`;
            
            currentLogIndex++;
        } else {
            clearInterval(logInterval);
            
            // Complete progress bar to 100%
            progressBar.style.width = '100%';
            
            // Hold preloader briefly, then fade out
            setTimeout(() => {
                preloader.classList.add('fade-out');
                // Initialize subsequent interactive visual setups
                setTimeout(() => {
                    preloader.style.display = 'none';
                    // Trigger scroll reveals and start hero typewriter
                    initScrollReveal();
                    initTypewriter();
                }, 800);
            }, 600);
        }
    }, 120);
}

// ==========================================================================
// 2. STAGGERED INTERSECTION SCROLL REVEALS
// ==========================================================================
function initScrollReveal() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -60px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Highlight timeline items explicitly
                if (entry.target.classList.contains('timeline-item')) {
                    entry.target.classList.add('active');
                }
                
                // Once revealed, unobserve to free performance
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Register scroll reveal targets
    document.querySelectorAll('.reveal-item, .timeline-item').forEach(el => {
        revealObserver.observe(el);
    });
}

// ==========================================================================
// 3. GLOWING INTERACTIVE MOUSE FOLLOW SPOTLIGHT
// ==========================================================================
const cursorGlow = document.getElementById('cursor-glow');

document.addEventListener('mousemove', (e) => {
    if (!cursorGlow) return;
    
    // Performant requestAnimationFrame mouse coords tracking
    window.requestAnimationFrame(() => {
        cursorGlow.style.left = `${e.clientX}px`;
        cursorGlow.style.top = `${e.clientY}px`;
    });
});

// ==========================================================================
// 4. LAG-FOLLOWING PREMIUM CUSTOM CURSOR
// ==========================================================================
const cursorDot = document.getElementById('cursor-dot');
const cursorRing = document.getElementById('cursor-ring');

let mouseX = 0, mouseY = 0; // Current mouse coords
let ringX = 0, ringY = 0;   // Custom ring coords (interpolated)
const lerpFactor = 0.15;    // Lag follow factor

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    if (cursorDot) {
        cursorDot.style.left = `${mouseX}px`;
        cursorDot.style.top = `${mouseY}px`;
    }
});

function animateCursorRing() {
    if (cursorRing) {
        // Linear Interpolation (lerp) to create premium drag/lag feel
        ringX += (mouseX - ringX) * lerpFactor;
        ringY += (mouseY - ringY) * lerpFactor;
        
        cursorRing.style.left = `${ringX}px`;
        cursorRing.style.top = `${ringY}px`;
    }
    requestAnimationFrame(animateCursorRing);
}
requestAnimationFrame(animateCursorRing);

// Grow ring when hovering clickable elements
const clickables = document.querySelectorAll('a, button, .filter-btn, .skill-card, .project-card, .cert-card, .social-icon, .toggle-label');

clickables.forEach(item => {
    item.addEventListener('mouseenter', () => {
        if (cursorRing) cursorRing.classList.add('expand');
    });
    item.addEventListener('mouseleave', () => {
        if (cursorRing) cursorRing.classList.remove('expand');
    });
});

// ==========================================================================
// 5. INTERACTIVE HERO CANVAS STARFIELD (NEURAL NETWORK PARTICLES)
// ==========================================================================
const canvas = document.getElementById('starfield-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    
    let w = canvas.width = window.innerWidth;
    let h = canvas.height = window.innerHeight;
    
    const mouseNode = { x: null, y: null, radius: 180 };
    
    window.addEventListener('resize', () => {
        w = canvas.width = window.innerWidth;
        h = canvas.height = window.innerHeight;
    });
    
    window.addEventListener('mousemove', (e) => {
        mouseNode.x = e.clientX;
        mouseNode.y = e.clientY;
    });
    
    window.addEventListener('mouseleave', () => {
        mouseNode.x = null;
        mouseNode.y = null;
    });

    class Particle {
        constructor() {
            this.x = Math.random() * w;
            this.y = Math.random() * h;
            this.vx = (Math.random() - 0.5) * 0.4;
            this.vy = (Math.random() - 0.5) * 0.4;
            this.radius = Math.random() * 2 + 1;
            this.color = document.body.classList.contains('dark-mode') 
                ? `hsla(180, 100%, 65%, ${Math.random() * 0.4 + 0.1})` 
                : `hsla(250, 80%, 45%, ${Math.random() * 0.3 + 0.1})`;
        }
        
        update() {
            this.x += this.vx;
            this.y += this.vy;
            
            // Screen boundaries wrap
            if (this.x < 0) this.x = w;
            if (this.x > w) this.x = 0;
            if (this.y < 0) this.y = h;
            if (this.y > h) this.y = 0;
            
            // Mouse attraction spotlight pull
            if (mouseNode.x !== null) {
                const dx = mouseNode.x - this.x;
                const dy = mouseNode.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < mouseNode.radius) {
                    const force = (mouseNode.radius - dist) / mouseNode.radius;
                    this.x -= (dx / dist) * force * 0.6;
                    this.y -= (dy / dist) * force * 0.6;
                }
            }
        }
        
        draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
    }
    
    function initParticles() {
        const count = Math.min(Math.floor((w * h) / 11000), 100);
        particles = [];
        for (let i = 0; i < count; i++) {
            particles.push(new Particle());
        }
    }
    
    function connectParticles() {
        const isDark = document.body.classList.contains('dark-mode');
        const strokeColor = isDark ? '99, 102, 241' : '6, 182, 212';
        
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                
                if (dist < 110) {
                    const alpha = (110 - dist) / 110 * 0.15;
                    ctx.strokeStyle = `rgba(${strokeColor}, ${alpha})`;
                    ctx.lineWidth = 0.8;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }
    
    function animateParticles() {
        ctx.clearRect(0, 0, w, h);
        particles.forEach(p => {
            p.update();
            p.draw();
        });
        connectParticles();
        animationId = requestAnimationFrame(animateParticles);
    }
    
    initParticles();
    animateParticles();
    
    // Reset system on big resize
    window.addEventListener('resize', initParticles);
}

// ==========================================================================
// 6. GLOWING ACCENT typewriter FOR ROLE SUBTITLE
// ==========================================================================
function initTypewriter() {
    const roleText = document.getElementById('role-text');
    if (!roleText) return;
    
    const roles = [
        "AI & Machine Learning Engineer",
        "Agentic AI Developer",
        "Backend Systems Architect",
        "Dedicated Problem Solver"
    ];
    
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 80;
    
    function type() {
        const currentRole = roles[roleIndex];
        
        if (isDeleting) {
            roleText.textContent = currentRole.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 40; // delete faster
        } else {
            roleText.textContent = currentRole.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // type normal
        }
        
        if (!isDeleting && charIndex === currentRole.length) {
            isDeleting = true;
            typeSpeed = 2200; // hold display
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            roleIndex = (roleIndex + 1) % roles.length;
            typeSpeed = 400; // delay before next type
        }
        
        setTimeout(type, typeSpeed);
    }
    
    type();
}

// ==========================================================================
// 7. 3D CARD MOUSE-TILT & SPOTLIGHT BORDER EFFECT
// ==========================================================================
const tiltCards = document.querySelectorAll('.project-card, .cert-card, .floating-card');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        
        // Calculate mouse coord percent relative to card size
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Set CSS variables for spotlight borders follow
        card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
        card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
        
        // Calculate tilt angles (max tilt: 10 degrees)
        const tiltX = ((rect.height / 2 - y) / (rect.height / 2)) * 10;
        const tiltY = ((x - rect.width / 2) / (rect.width / 2)) * 10;
        
        // Render 3D rotation in screen coordinates
        card.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(1.025)`;
        card.style.transition = 'none'; // Instant interactive follow
    });
    
    card.addEventListener('mouseleave', () => {
        // Reset transform smoothly
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
        card.style.transition = 'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)';
    });
});

// ==========================================================================
// 8. LASER TIMELINE PROGRESS TRACKER
// ==========================================================================
const timelineLaser = document.getElementById('timeline-laser');
const educationLaser = document.getElementById('education-laser');

window.addEventListener('scroll', () => {
    trackLaserProgress(timelineLaser, '#experience');
    trackLaserProgress(educationLaser, '#education');
});

function trackLaserProgress(laserElement, sectionSelector) {
    if (!laserElement) return;
    
    const section = document.querySelector(sectionSelector);
    if (!section) return;
    
    const rect = section.getBoundingClientRect();
    const sectionHeight = rect.height;
    
    // Amount scrolled through this section
    const scrolledAmt = window.innerHeight / 2 - rect.top;
    
    if (scrolledAmt > 0 && scrolledAmt < sectionHeight) {
        const percent = (scrolledAmt / sectionHeight) * 100;
        laserElement.style.height = `${percent}%`;
    } else if (scrolledAmt <= 0) {
        laserElement.style.height = '0%';
    } else {
        laserElement.style.height = '100%';
    }
}

// ==========================================================================
// 9. HIGH-TECH SHOWN SCROLLING NAVBAR EFFECT
// ==========================================================================
const header = document.getElementById('navbar-header');
const navLinkItems = document.querySelectorAll('.nav-link-item');
const sections = document.querySelectorAll('section');

window.addEventListener('scroll', () => {
    // Shrink and blur pill navbar on scroll
    if (window.scrollY > 40) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Sync nav links active classes with scroll coordinates
    let currentActiveId = '';
    
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        // Section center crossed viewport middle
        if (rect.top <= window.innerHeight * 0.4) {
            currentActiveId = section.getAttribute('id');
        }
    });
    
    navLinkItems.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentActiveId}`) {
            link.classList.add('active');
        }
    });
});

// ==========================================================================
// 10. PROJECT FILTERING CORE
// ==========================================================================
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        const filterVal = button.getAttribute('data-filter');
        
        projectCards.forEach(card => {
            const category = card.getAttribute('data-category');
            
            if (filterVal === 'all' || category === filterVal) {
                card.style.display = 'flex';
                // Trigger smooth fade scale transitions
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
                }, 20);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'scale(0.9) translateY(20px)';
                setTimeout(() => {
                    card.style.display = 'none';
                }, 400);
            }
        });
    });
});

// ==========================================================================
// 11. DYNAMIC THEME SWITCH ENGINE
// ==========================================================================
const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

if (themeSwitch) {
    themeSwitch.addEventListener('change', () => {
        body.classList.toggle('dark-mode');
        localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
        
        // Re-initialize particles to matches color palettes
        if (typeof initParticles === 'function') {
            initParticles();
        }
    });
}

// Load saved theme configuration on launch
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.remove('dark-mode');
    if (themeSwitch) themeSwitch.checked = false;
} else {
    body.classList.add('dark-mode');
    if (themeSwitch) themeSwitch.checked = true;
}

// ==========================================================================
// 12. RESPONSIVE MOBILE NAVIGATION PILL MENU
// ==========================================================================
const hamburger = document.getElementById('hamburger-menu');
const navLinks = document.querySelector('.nav-links');

if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
    
    // Close nav links drawer on link click
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ==========================================================================
// 13. FORM TRANSMISSION & VALIDATION CORE (FORMSPREE INTEGRATOR)
// ==========================================================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        const submitBtn = contactForm.querySelector('.btn-submit');
        
        let isFormValid = true;
        
        // Reset Error displays
        document.querySelectorAll('.form-error').forEach(err => {
            err.classList.remove('show');
            err.textContent = '';
        });
        
        // Validate Inputs
        if (!nameInput.value.trim()) {
            showFormError(nameInput, 'Name identification is required');
            isFormValid = false;
        } else {
            nameInput.style.borderColor = '';
        }
        
        if (!emailInput.value.trim()) {
            showFormError(emailInput, 'Connection email route is required');
            isFormValid = false;
        } else if (!isValidEmail(emailInput.value.trim())) {
            showFormError(emailInput, 'Please input a valid email route');
            isFormValid = false;
        } else {
            emailInput.style.borderColor = '';
        }
        
        if (!messageInput.value.trim()) {
            showFormError(messageInput, 'Transmission message content is required');
            isFormValid = false;
        } else {
            messageInput.style.borderColor = '';
        }
        
        if (isFormValid) {
            const originalText = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span>Transmitting...</span>';
            submitBtn.style.boxShadow = '0 0 15px rgba(6, 182, 212, 0.4)';
            
            try {
                // Submit Formspree request (retaining existing endpoint payload)
                const response = await fetch('https://formspree.io/f/xaqvbrpy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: nameInput.value,
                        email: emailInput.value,
                        message: messageInput.value
                    })
                });
                
                if (response.ok) {
                    submitBtn.innerHTML = '<span>✓ Data Transmitted!</span>';
                    submitBtn.style.background = 'linear-gradient(135deg, #10b981, #059669)';
                    submitBtn.style.boxShadow = '0 0 20px rgba(16, 185, 129, 0.5)';
                    
                    setTimeout(() => {
                        submitBtn.innerHTML = originalText;
                        submitBtn.style.background = '';
                        submitBtn.style.boxShadow = '';
                        submitBtn.disabled = false;
                        contactForm.reset();
                    }, 2500);
                } else {
                    throw new Error('Connection failed');
                }
            } catch (err) {
                submitBtn.innerHTML = '<span>Error transmitting</span>';
                submitBtn.style.background = 'linear-gradient(135deg, #ef4444, #dc2626)';
                submitBtn.style.boxShadow = '0 0 20px rgba(239, 68, 68, 0.5)';
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalText;
                    submitBtn.style.background = '';
                    submitBtn.style.boxShadow = '';
                    submitBtn.disabled = false;
                }, 2500);
            }
        }
    });
}

function showFormError(inputElement, errorMsg) {
    const errorContainer = inputElement.parentElement.querySelector('.form-error');
    if (errorContainer) {
        errorContainer.textContent = errorMsg;
        errorContainer.classList.add('show');
    }
    inputElement.style.borderColor = '#ef4444';
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}
