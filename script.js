
const feedbackBtn = document.getElementById('feedbackBtn');
const feedbackForm = document.getElementById('feedbackForm');

feedbackBtn.addEventListener('click', () => {
    feedbackForm.style.opacity = '0.5'; 
    feedbackForm.style.pointerEvents = 'auto'
    document.body.style.overflow = 'hidden';
});

feedbackForm.addEventListener('click', (event) => {
    if (event.target === feedbackForm) {
        feedbackForm.style.opacity = '0'; 
        feedbackForm.style.pointerEvents = 'none';
        document.body.style.overflow = 'auto'; 
    }
});
