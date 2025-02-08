// Smooth Scroll for "Go to Top" Button
document.querySelector('.back-to-top').addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Enables smooth scrolling
    });
});
// Back-to-Top Button Visibility
window.addEventListener('scroll', function () {
    let backToTopButton = document.querySelector('.back-to-top');
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

// Contact Form Submission with Validation
document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseMessage = document.getElementById("response-message");

    if (!name || !email || !message) {
        responseMessage.textContent = "Please fill out all fields!";
        responseMessage.style.color = "red";
        responseMessage.style.display = "block";
        return;
    }

    const formData = new FormData(this);

    fetch("https://formspree.io/f/manqbqvn", {
        method: "POST",
        body: formData,
        headers: { "Accept": "application/json" }
    })
    .then(response => {
        if (response.ok) {
            responseMessage.textContent = "Your response has been recorded!";
            responseMessage.style.color = "green";
            responseMessage.style.display = "block";
            document.getElementById("contact-form").reset(); // Clear the form fields
        } else {
            responseMessage.textContent = "Oops! Something went wrong.";
            responseMessage.style.color = "red";
            responseMessage.style.display = "block";
        }
    })
    .catch(error => {
        responseMessage.textContent = "Error submitting the form.";
        responseMessage.style.color = "red";
        responseMessage.style.display = "block";
    });
});