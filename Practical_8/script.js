const form = document.getElementById('registerForm');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const submitButton = form.querySelector('button');

// Error message containers
const usernameError = document.getElementById('usernameError');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const confirmPasswordError = document.getElementById('confirmPasswordError');

// Validation flags
let validUsername = false;
let validEmail = false;
let validPassword = false;
let validConfirm = false;

// Username validation
username.addEventListener('input', () => {
  if (username.value.trim().length < 3) {
    usernameError.textContent = "Username must be at least 3 characters long";
    validUsername = false;
  } else {
    usernameError.textContent = "";
    validUsername = true;
  }
  toggleSubmit();
});

// Email validation
email.addEventListener('input', () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email.value)) {
    emailError.textContent = "Please enter a valid email address";
    validEmail = false;
  } else {
    emailError.textContent = "";
    validEmail = true;
  }
  toggleSubmit();
});

// Password validation
password.addEventListener('input', () => {
  const pass = password.value;
  const upper = /[A-Z]/.test(pass);
  const lower = /[a-z]/.test(pass);
  const special = /[@#$%^&*!]/.test(pass);

  if (pass.length < 8 || !upper || !lower || !special) {
    passwordError.textContent = "Password must be 8+ chars, include upper, lower & special character";
    validPassword = false;
  } else {
    passwordError.textContent = "";
    validPassword = true;
  }
  checkConfirmPassword();
  toggleSubmit();
});

// Confirm Password validation
confirmPassword.addEventListener('input', checkConfirmPassword);

function checkConfirmPassword() {
  if (confirmPassword.value !== password.value || confirmPassword.value === "") {
    confirmPasswordError.textContent = "Passwords do not match";
    validConfirm = false;
  } else {
    confirmPasswordError.textContent = "";
    validConfirm = true;
  }
  toggleSubmit();
}

// Enable/Disable Submit button
function toggleSubmit() {
  if (validUsername && validEmail && validPassword && validConfirm) {
    submitButton.disabled = false;
  } else {
    submitButton.disabled = true;
  }
}

// Prevent form submission for demo
form.addEventListener('submit', (e) => {
  e.preventDefault();
  alert("Form submitted successfully!");
});
