// Smooth scrolling for links (if needed for future expansion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for project cards on load
window.addEventListener('load', () => {
    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Initial styles for animation (add to CSS if using JS)
// .project-card { opacity: 0; transform: translateY(20px); transition: opacity 0.5s ease, transform 0.5s ease; }