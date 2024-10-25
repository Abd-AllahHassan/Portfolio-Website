var typed = new Typed(".text", {
    strings: ["Frontend Dev . . ." , "Programmer . . ." , "Web Dev . . ."],
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
    emailjs.send('secret', 'secret  ', {
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
