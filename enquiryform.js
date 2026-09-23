// When the form is submitted
document.getElementById("enquiryForm").addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();

    // Get the user's name
    let name = document.getElementById("name").value;

    // Show a thank-you message
    alert("Thanks, " + name + "! Your enquiry has been sent to APU Karting Club.");

    // Clear the form
    this.reset();

});