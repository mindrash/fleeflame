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

    // Handle Apps Submenu Toggle
    const appsMenuItem = document.querySelector('.has-submenu');
    const submenu = document.querySelector('.submenu');
    
    if (appsMenuItem && submenu) {
        appsMenuItem.addEventListener('click', (e) => {
            e.preventDefault();
            submenu.classList.toggle('active');
        });
    }

    // Set Footer Year
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Email Obfuscation
    const contactEmailLink = document.getElementById('contact-email');
    if (contactEmailLink) {
        contactEmailLink.addEventListener('click', (e) => {
            e.preventDefault();
            const user = contactEmailLink.getAttribute('data-user');
            const domain = contactEmailLink.getAttribute('data-domain');
            const email = `${user}@${domain}`;
            
            contactEmailLink.textContent = email;
            contactEmailLink.href = `mailto:${email}`;
            contactEmailLink.style.borderBottom = 'none'; // Remove the dashed line once revealed
            
            // Remove the event listener so the next click opens the mail client
            // (Setting href usually handles this, but good to be explicit)
            contactEmailLink.onclick = null;
        });
    }
});
