// Main JavaScript for Metis Labs

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Active link highlighting
    const currentPage = window.location.pathname.split("/").pop();
    document.querySelectorAll('nav ul li a').forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === "" && href === "index.html")) {
            link.classList.add('active');
        }
    });

    // Mobile menu toggle logic
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '&#9776;'; // Hamburger icon
    
    const headerContainer = document.querySelector('header .container');
    const nav = document.querySelector('nav');
    
    if (headerContainer && nav) {
        headerContainer.insertBefore(menuToggle, nav);
        
        menuToggle.addEventListener('click', () => {
            console.log('Menu toggle clicked');
            nav.classList.toggle('active');
            console.log('Nav classList:', nav.classList);
            menuToggle.innerHTML = nav.classList.contains('active') ? '&#10005;' : '&#9776;';
        });

        // Close menu when clicking a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuToggle.innerHTML = '&#9776;';
            });
        });
    }

    // Language toggle logic
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        let currentLang = localStorage.getItem('metis-lang') || 'en';
        
        const updateUI = (lang) => {
            if (lang === 'th') {
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'none');
                document.querySelectorAll('.lang-th').forEach(el => el.style.display = 'block');
                langToggle.innerText = 'EN';
            } else {
                document.querySelectorAll('.lang-en').forEach(el => el.style.display = 'block');
                document.querySelectorAll('.lang-th').forEach(el => el.style.display = 'none');
                langToggle.innerText = 'TH';
            }
        };

        updateUI(currentLang);

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'th' : 'en';
            localStorage.setItem('metis-lang', currentLang);
            updateUI(currentLang);
        });
    }
});
