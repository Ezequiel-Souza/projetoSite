// Simulating a database with users
const users = [
    { username: 'user1', password: 'password1' },
    { username: 'user2', password: 'password2' },
    { username: 'admin', password: 'admin123' }
];

const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('error-message');

loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if the user exists in the "database"
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Redirect to the home page after successful login
        window.location.href = 'pages/index.html'; // Update the path here
    } else {
        errorMessage.textContent = 'Invalid username or password';
    }
});
