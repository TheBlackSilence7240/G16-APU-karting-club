    // When the form is submitted
    document.getElementById("registrationForm").addEventListener("submit", function(event) {

        // Stop the page from refreshing
        event.preventDefault();

        // Get the user's name
        let name = document.getElementById("name").value;

        // Show a thank-you message
        alert("Thank you, " + name + "! Your APU Karting Club registration has been submitted.");

        // Clear the form
        this.reset();

    });