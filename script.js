document.addEventListener('DOMContentLoaded', function() {
    // Templates data
    const templates = [
        {
            name: "Template Site vitrine",
            description: "Template professionnel pour entreprises et startups",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        },
        {
            name: "Template Portfolio",
            description: "Présentez votre travail de manière élégante",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        },
        {
            name: "Template CV",
            description: "Pour un CV moderne et attrayant ",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        },
        {
            name: "Template Restaurant et Café",
            description: "Idéal pour les restaurants et cafés modernes ",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        },
        {
            name: "Landing Page",
            description: "Pour promouvoir vos réseaux sociaux ou services",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        },
        {
            name: "Template coach/tehrapeute",
            description: "Template pour coachs et thérapeutes professionnels voulant se démarquer",
            price: "A partir de 79€",
            image: "https://via.placeholder.com/400x300"
        }
    ];

    // Load templates
    const templatesGrid = document.querySelector('.templates-grid');
    
    templates.forEach(template => {
        const templateCard = document.createElement('div');
        templateCard.className = 'template-card';
        templateCard.innerHTML = `
            <img src="${template.image}" alt="${template.name}" class="template-img">
            <div class="template-info">
                <h3>${template.name}</h3>
                <p>${template.description}</p>
                <div class="template-price">${template.price}</div>
                <a href="#" class="btn btn-primary">voir plus</a>
            </div>
        `;
        templatesGrid.appendChild(templateCard);
    });

    // Mobile menu toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const ctaButtons = document.querySelector('.cta-buttons');

    hamburger.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        ctaButtons.classList.toggle('active');
    });

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navLinks.classList.remove('active');
                ctaButtons.classList.remove('active');
            }
        });
    });

    // Animation on scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.feature-card, .template-card, .pricing-card, .testimonial-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }

    // Set initial state for animated elements
    document.querySelectorAll('.feature-card, .template-card, .pricing-card, .testimonial-card').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Run once on page load
});