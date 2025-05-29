// Example access code for demo
const correctCode = "trust2025";

// Function to verify access
function verifyAccess() {
    const userInput = document.getElementById("accessCode").value;
    const message = document.getElementById("message");
    const secureContent = document.getElementById("secureContent");

    if (userInput === correctCode) {
        message.textContent = "Access Granted!";
        message.style.color = "green";
        secureContent.style.display = "block";
    } else {
        message.textContent = "Access Denied. Incorrect Code.";
        message.style.color = "red";
        secureContent.style.display = "none";
    }
}
