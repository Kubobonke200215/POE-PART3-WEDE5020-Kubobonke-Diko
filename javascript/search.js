/**
 * search.js - Handles client-side search functionality across services and page content.
 */
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('#site-search-input');
    const serviceCards = document.querySelectorAll('.service-card');

    if (searchInput && serviceCards.length > 0) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase().trim();
            
            serviceCards.forEach(card => {
                const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('p')?.textContent.toLowerCase() || '';
                
                if (title.includes(query) || desc.includes(query)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});