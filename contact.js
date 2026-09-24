    // When the form is submitted
    document.getElementById("contactForm").addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get the user's name
        let name = document.getElementById("name").value;

        // Show a thank-you message
        alert("Thank you, " + name + "! Your message has been sent to APU Karting Club.");

        // Clear the form
        this.reset();

    });