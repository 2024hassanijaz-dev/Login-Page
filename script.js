// Main JavaScript for the login page.
// Handles password visibility toggle and client-side form validation feedback.
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const statusMessage = document.getElementById("statusMessage");

function validateEmail(value) {
  // Basic email format check for immediate user feedback.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

// Show/Hide password button behavior.
togglePassword.addEventListener("click", () => {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
});

// Validate form fields and display messages without a page reload.
form.addEventListener("submit", (event) => {
  event.preventDefault();

  let valid = true;
  emailError.textContent = "";
  passwordError.textContent = "";
  statusMessage.textContent = "";

  if (!email.value.trim()) {
    emailError.textContent = "Email is required.";
    valid = false;
  } else if (!validateEmail(email.value.trim())) {
    emailError.textContent = "Enter a valid email address.";
    valid = false;
  }

  if (!password.value) {
    passwordError.textContent = "Password is required.";
    valid = false;
  } else if (password.value.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters.";
    valid = false;
  }

  if (!valid) {
    return;
  }

  statusMessage.textContent = "Login successful (demo only).";
  form.reset();
  password.type = "password";
  togglePassword.textContent = "Show";
  togglePassword.setAttribute("aria-label", "Show password");
});
