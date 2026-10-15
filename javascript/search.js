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

// Search functionality for Siyakhana Legal Advice Centre
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('site-search');
    const searchBtn = document.getElementById('search-btn-trigger');

    if (!searchInput) return;

    // Index of all searchable pages and key sections on the website
    const siteIndex = [
        { title: "Home", url: "index.html", keywords: "home legal advice sassa rural justice consultation outreach contact" },
        { title: "About Us", url: "./Pages/About.html", keywords: "about mission vision background values history team" },
        { title: "Services", url: "./Pages/services.html", keywords: "services legal representation consultation dispute resolution human rights SASSA grants" },
        { title: "Enquiry", url: "./Pages/Enquiry.html", keywords: "enquiry request assistance message form support legal help" },
        { title: "Contact Us", url: "./Pages/contactus.html", keywords: "contact phone email address location mount frere office hotline complaints" },
        { title: "Lodge a Complaint", url: "/complaints", keywords: "complaint ethics fraud hotline feedback dispute" }
    ];

    function performSearch() {
        const query = searchInput.value.trim().toLowerCase();
        if (!query) {
            alert('Please enter a keyword or phrase to search.');
            return;
        }

        // Check if any indexed page matches the search query
        const match = siteIndex.find(item => item.keywords.includes(query) || item.title.toLowerCase().includes(query));

        if (match) {
            // Redirect to the matching page
            window.location.href = match.url;
        } else {
            // Fallback: search current page text content if no index match
            const pageText = document.body.innerText.toLowerCase();
            if (pageText.includes(query)) {
                alert(`Found "${query}" on this page!`);
                // Optional: scroll or highlight text if desired
            } else {
                alert(`No results found for "${query}". Try searching for terms like "services", "contact", "about", or "enquiry".`);
            }
        }
    }

    // Event listener for search button click
    if (searchBtn) {
        searchBtn.addEventListener('click', (e) => {
            e.preventDefault();
            performSearch();
        });
    }

    // Event listener for pressing "Enter" in the search input
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            performSearch();
        }
    });
});