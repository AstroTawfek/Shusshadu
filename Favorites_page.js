document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.querySelector('.fa-bars'); // Menu icon (hamburger)
    const mobileMenu = document.querySelector('#mobile-menu'); // Navbar items for mobile view

    menuIcon.addEventListener('click', () => {
        // Toggle the visibility of the navbar items
        mobileMenu.classList.toggle('hidden');
    });
});