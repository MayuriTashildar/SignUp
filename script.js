document.getElementById("signup-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const confirmPassword = document
    .getElementById("confirm-password")
    .value.trim();
  const errorMessage = document.getElementById("error-message");

  // Reset error message
  errorMessage.textContent = "";

  if (!username || !email || !password || !confirmPassword) {
    errorMessage.textContent = "All fields are required!";
    return;
  }

  if (!/\S+@\S+\.\S+/.test(email)) {
    errorMessage.textContent = "Invalid email format!";
    return;
  }

  if (password.length < 6) {
    errorMessage.textContent = "Password must be at least 6 characters long!";
    return;
  }

  if (password !== confirmPassword) {
    errorMessage.textContent = "Passwords do not match!";
    return;
  }

  alert("Sign up successful!");
});
