// Smooth Scrolling Effect
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Skill Badge Animation (e.g., on hover or on page load)
document.addEventListener('DOMContentLoaded', function () {
    const skillBadges = document.querySelectorAll('.skill-badge');
    skillBadges.forEach(badge => {
        badge.addEventListener('mouseover', () => {
            badge.style.backgroundColor = '#16a085'; // Change on hover
        });

        badge.addEventListener('mouseout', () => {
            badge.style.backgroundColor = '#2980b9'; // Revert back
        });
    });
});

const menuToggle = document.querySelector('.menu-toggle');
const dropdownMenu = document.querySelector('.dropdown-menu');

menuToggle.addEventListener('click', () => {
    dropdownMenu.classList.toggle('show');
});
