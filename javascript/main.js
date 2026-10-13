/**
 * main.js - General interactivity for Siyakhana Legal Advice Centre website.
 */
document.addEventListener('DOMContentLoaded', () => {
    // Chat widget interaction
    const chatButton = document.querySelector('.chat-button');
    if (chatButton) {
        chatButton.addEventListener('click', () => {
            alert('Connecting you to Siyakhana Legal virtual assistant... (Live chat widget coming soon)');
        });
    }

    // Dynamic copyright year update
    const yearSpan = document.querySelector('.footer-bottom p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.innerHTML = `&copy; ${currentYear} Siyakhana Legal Advice Centre. All rights Reserved.`;
    }

    // Mobile Navigation Toggle support
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const siteNav = document.querySelector('.site-nav');
    if (mobileMenuToggle && siteNav) {
        mobileMenuToggle.addEventListener('click', () => {
            siteNav.classList.toggle('active');
        });
    }
});