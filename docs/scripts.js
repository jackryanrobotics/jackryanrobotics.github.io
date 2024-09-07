// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.blog-link');

    // Load read status from localStorage
    links.forEach(link => {
        const href = link.getAttribute('href');
        if (localStorage.getItem(href) === 'read') {
            link.classList.add('read');
        }
    });

    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', () => {
            const href = link.getAttribute('href');
            localStorage.setItem(href, 'read');
            link.classList.add('read');
        });
    });
});