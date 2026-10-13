/**
 * lightbox.js - Handles image lightbox functionality for service cards and images.
 */
document.addEventListener('DOMContentLoaded', () => {
    const lightboxImages = document.querySelectorAll('.service-image, img[data-lightbox]');
    
    if (lightboxImages.length === 0) {
        console.warn('Lightbox: No images found with class .service-image or attribute [data-lightbox].');
        return;
    }

    // Create lightbox modal container dynamically
    const lightboxModal = document.createElement('div');
    lightboxModal.id = 'lightbox-modal';
    lightboxModal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        justify-content: center;
        align-items: center;
        padding: 20px;
        box-sizing: border-box;
    `;

    const lightboxImg = document.createElement('img');
    lightboxImg.style.cssText = `
        max-width: 90%;
        max-height: 85vh;
        object-fit: contain;
        border-radius: 4px;
        box-shadow: 0 5px 15px rgba(0,0,0,0.5);
    `;

    const closeBtn = document.createElement('span');
    closeBtn.innerHTML = '&times;';
    closeBtn.style.cssText = `
        position: absolute;
        top: 20px;
        right: 30px;
        color: #fff;
        font-size: 40px;
        font-weight: bold;
        cursor: pointer;
    `;

    lightboxModal.appendChild(closeBtn);
    lightboxModal.appendChild(lightboxImg);
    document.body.appendChild(lightboxModal);

    // Open lightbox on image click
    lightboxImages.forEach(img => {
        img.style.cursor = 'pointer';
        img.addEventListener('click', () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt || 'Lightbox image';
            lightboxModal.style.display = 'flex';
        });
    });

    // Close lightbox handlers
    const closeLightbox = () => {
        lightboxModal.style.display = 'none';
    };

    closeBtn.addEventListener('click', closeLightbox);
    lightboxModal.addEventListener('click', (e) => {
        if (e.target === lightboxModal) {
            closeLightbox();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightboxModal.style.display === 'flex') {
            closeLightbox();
        }
    });
});