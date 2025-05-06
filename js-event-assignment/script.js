// Button click

const button = document.getElementById('changeBtn');

button.addEventListener('click', () => {
    console.log( 'Status Updated!');
    
});

// Keypress Detection

document.addEventListener('keydown', (event) => {
    console.log(`I pressed the following key: ${event.key}`);
});


// Secret action

button.addEventListener('dblclick', () => {
    console.log( 'Tadaaa!');
});


function openTab(tabId) {
    // Hide all tab contents
    document.querySelectorAll('.tab-content').forEach(tab => {
      tab.style.display = 'none';
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-btn').forEach(btn => {
      btn.classList.remove('active');
    });
    
    // Show the selected tab and mark button as active
    document.getElementById(tabId).style.display = 'block';
    event.currentTarget.classList.add('active');
  }

document.getElementById("signupForm").addEventListener("submit", function(e) {
    e.preventDefault(); // Stop form from submitting
    
    // Get form values
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    
    // Clear previous errors
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    
    // Simple validation
    let isValid = true;
    
    // 1. Check email contains @
    if (!email.includes("@")) {
      document.getElementById("emailError").textContent = "Email needs @ symbol";
      isValid = false;
    }
    
    // 2. Check password length
    if (password.length < 8) {
      document.getElementById("passwordError").textContent = "Password too short (min 8 chars)";
      isValid = false;
    }
    
    // If valid, show success
    if (isValid) {
      alert("Login successful!");
      this.reset(); // Clear form
    }
  });
