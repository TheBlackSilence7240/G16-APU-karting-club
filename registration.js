// When the form is submitted
document.getElementById("registrationForm").addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's information
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let dob = document.getElementById("dob").value;
    let message = document.getElementById("message").value.trim();

    // Check Name
    if (name === "") {
        alert("Please enter your name.");
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

    // Check Phone
    if (phone === "") {
        alert("Please enter your phone number.");
        return;
    }

    // Check Phone format
    if (!/^\d{9,10}$/.test(phone)) {
        alert("Phone number must contain 9 or 10 digits.");
        return;
    }

    // Check Date of Birth
    if (dob === "") {
        alert("Please enter your date of birth.");
        return;
    }

    // Check Message
    if (message === "") {
        alert("Please tell us why you want to join.");
        return;
    }

    // Show a thank-you message
    alert("Thank you, " + name + "! Your APU Karting Club registration has been submitted.");

    // Clear the form
    this.reset();

});