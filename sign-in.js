
document.addEventListener('DOMContentLoaded', function() {
    // User type selection
    const userTypeBtns = document.querySelectorAll('.user-type-btn');
    userTypeBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            userTypeBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Form submission
    const loginForm = document.getElementById('loginForm');
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.querySelector('.user-type-btn.active').dataset.type;
        
        // In a real application, you would verify credentials with your backend
        // For this example, we'll simulate a successful login
        
        // Redirect based on user type
        switch(userType) {
            case 'faculty':
                window.location.href = '/client/home/users/faculty-portal.html';
                break;
            case 'student':
                window.location.href = '/client/home/users/student-portal.html';
                break;
            case 'admin':
                window.location.href = '/client/home/users/admin-portal.html';
                break;
            default:
                window.location.href = '/dashboard.html';
        }
    });

    // Sign up link
    const signupLink = document.getElementById('signupLink');
    signupLink.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = '/signup.html';
    });
});


