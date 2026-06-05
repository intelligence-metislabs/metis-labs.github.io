// Subtle animations for Metis Labs

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section, .card').forEach(el => {
        el.style.opacity = "0";
        el.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        el.style.transform = "translateY(20px)";
        observer.observe(el);
    });

    // Custom fade-in class effect
    const style = document.createElement('style');
    style.innerHTML = `
        .fade-in {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
});
