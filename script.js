const contactForm = document.getElementById('contact-form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    
    alert('Message sent successfully! We will get back to you soon.');

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
});
