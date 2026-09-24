// When the form is submitted
document.getElementById("contactForm").addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's information
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let subject = document.getElementById("subject").value.trim();
    let message = document.getElementById("message").value.trim();

    // Check Full Name
    if (name === "") {
        alert("Please enter your full name.");
        return;
    }

    // Check Email
    if (email === "") {
        alert("Please enter your email address.");
        return;
    }

    // Check Email format
    if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        return;
    }

    // Check Subject
    if (subject === "") {
        alert("Please enter a subject.");
        return;
    }

    // Check Message
    if (message === "") {
        alert("Please enter your message.");
        return;
    }

    // Show a thank-you message
    alert("Thanks, " + name + "! Your message has been sent to APU Karting Club.");

    // Clear the form
    this.reset();

});