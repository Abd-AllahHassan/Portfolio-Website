var typed = new Typed(".text", {
    strings: ["Frontend Dev . . ." , "Backend Dev . . ." , "Web Dev . . ."],
    typeSpeed: 70,
    backSpeed: 50,
    backDelay: 1000,
    loop: true
})
// Add this script to handle the menu toggle
document.addEventListener("DOMContentLoaded", function() {
    const menuIcon = document.getElementById("menu-icon");
    const navbar = document.getElementById("navbar");

    menuIcon.addEventListener("click", function() {
        navbar.classList.toggle("active");
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show the loader
    document.getElementById('loader').style.display = 'block';

    // Send email using EmailJS
    emailjs.send('service_d6n5cuh', 'template_hrst80f', {
        from_name: document.getElementById('name').value,
        from_email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
    })
    .then(function(response) {
        // Hide the loader on success
        document.getElementById('loader').style.display = 'none';
        console.log('SUCCESS!', response.status, response.text);
        alert('Your message has been sent successfully!');
    }, function(error) {
        // Hide the loader on error
        document.getElementById('loader').style.display = 'none';
        console.log('FAILED...', error);
        alert('Failed to send the message. Please try again.');
    });
});
    document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');

    function changeNavActive() {
        let index = sections.length;

        while (--index && window.scrollY + 170 < sections[index].offsetTop) {}

        navLinks.forEach((link) => link.classList.remove('nav-link-active'));
        navLinks[index].classList.add('nav-link-active');
    }

    changeNavActive();
    window.addEventListener('scroll', changeNavActive);
});

function toggleAboutText() {
    const extraText = document.querySelector('.extra-text');
    const toggleButton = document.querySelector('.toggle-btn');
    
    if (extraText.style.display === 'none' || !extraText.style.display) {
        extraText.style.display = 'block';
        toggleButton.textContent = 'Less About Me';
    } else {
        extraText.style.display = 'none';
        toggleButton.textContent = 'More About Me';
    }
}


// Select all sections with the data-animate attribute
const animatedSections = document.querySelectorAll('[data-animate]');

// Initialize Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
            observer.unobserve(entry.target); // Stop observing once animation is triggered
        }
    });
}, {
    threshold: 0.3 // Trigger when 20% of the element is visible
});

// Observe each section
animatedSections.forEach(section => observer.observe(section));
