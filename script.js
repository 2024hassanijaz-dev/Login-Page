// Main JavaScript for the login page.
// Handles password visibility toggle and client-side form validation feedback.
const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const statusMessage = document.getElementById("statusMessage");

// Demo database layer (no real DB connection yet).
// Replace these methods with real backend/API calls later.
const demoDatabase = {
  async connect() {
    // Simulate async DB connection.
    return { ok: true };
  },

  async findUserByEmail(email) {
    // Simulate a users table lookup. Empty for now on purpose.
    const usersTable = [];
    return usersTable.find((user) => user.email.toLowerCase() === email.toLowerCase()) || null;
  },

  async verifyPassword(user, inputPassword) {
    // Simulate password check (real apps should verify server-side with hashing).
    return user.password === inputPassword;
  },
};

function validateEmail(value) {
  // Basic email format check for immediate user feedback.
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function authenticateUsingDatabase(inputEmail, inputPassword) {
  // Single auth entry point.
  // Later you can replace this function body with an API call like:
  // POST /login { email, password }
  await demoDatabase.connect();
  const user = await demoDatabase.findUserByEmail(inputEmail);

  if (!user) {
    return { ok: false, reason: "not_found" };
  }

  const isPasswordValid = await demoDatabase.verifyPassword(user, inputPassword);
  if (!isPasswordValid) {
    return { ok: false, reason: "wrong_password" };
  }

  return { ok: true, reason: "success" };
}

// Show/Hide password button behavior.
togglePassword.addEventListener("click", () => {
  const isPassword = password.type === "password";
  password.type = isPassword ? "text" : "password";
  togglePassword.textContent = isPassword ? "Hide" : "Show";
  togglePassword.setAttribute("aria-label", isPassword ? "Hide password" : "Show password");
});

// Validate form fields and display messages without a page reload.
form.addEventListener("submit", async (event) => {
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

  // Authentication is separated from UI so backend integration stays isolated.
  const authResult = await authenticateUsingDatabase(email.value.trim(), password.value);

  if (!authResult.ok) {
    // Map auth outcomes to field-level messages for clearer feedback.
    if (authResult.reason === "not_found") {
      emailError.textContent = "User does not exist.";
    } else if (authResult.reason === "wrong_password") {
      passwordError.textContent = "Incorrect password.";
    }
    return;
  }

  statusMessage.textContent = "Login successful (demo only).";
  form.reset();
  password.type = "password";
  togglePassword.textContent = "Show";
  togglePassword.setAttribute("aria-label", "Show password");
});
