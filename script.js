
const showOverlayButton = document.getElementById('feedback-btn');
const overlay = document.getElementById('feedback');

showOverlayButton.addEventListener('click', () => {
    overlay.style.opacity = '0.5'; 
    overlay.style.pointerEvents = 'auto'
    document.body.style.overflow = 'hidden';
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.opacity = '0'; 
        overlay.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto'; 
    }
});