document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const yearSpan = document.getElementById('year');

    // Toggle Mobile Menu
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Optional: Animate hamburger
        const spans = menuToggle.querySelectorAll('span');
        navLinks.classList.contains('active') ? 
            (spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)',
             spans[1].style.opacity = '0',
             spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)') :
            (spans[0].style.transform = 'none',
             spans[1].style.opacity = '1',
             spans[2].style.transform = 'none');
    });

    // Set Footer Year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});
