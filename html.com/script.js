document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the actual form submission
            alert('شكراً لتواصلك معنا! سنقوم بالرد عليك في أقرب وقت ممكن.');
            contactForm.reset(); // Reset the form fields
        });
    }
});