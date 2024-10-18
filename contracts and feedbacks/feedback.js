// Function to handle feedback submission
document.getElementById('submitButton').addEventListener('click', submitFeedback);

function submitFeedback() {
    // Get form values
    const contractId = document.getElementById("contractId").value;
    const userType = document.getElementById("userType").value;
    const rating = document.getElementById("rating").value;
    const feedback = document.getElementById("feedback").value;

    // Simple validation
    if (!contractId || !userType || !rating || !feedback) {
        alert("Please fill out all fields.");
        return;
    }

    // Simulate feedback submission (in real cases, you'd send this to a server)
    console.log("Feedback Submitted:");
    console.log("Contract ID:", contractId);
    console.log("User Type:", userType);
    console.log("Rating:", rating);
    console.log("Feedback:", feedback);

    // Display success message
    alert("Thank you for your feedback!");

    // Reset the form after submission
    document.getElementById("feedbackForm").reset();
}
