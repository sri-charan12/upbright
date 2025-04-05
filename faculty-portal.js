document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active classes
            tabs.forEach(t => t.classList.remove('active-tab'));
            tabContents.forEach(content => content.classList.remove('active-tab'));

            // Add active classes
            tab.classList.add('active-tab');
            const targetTab = document.getElementById(tab.dataset.tab);
            targetTab.classList.add('active-tab');
        });
    });

    // Sample Course Creation
    const courseList = document.querySelector('.course-list');
    document.getElementById('new-course-btn').addEventListener('click', () => {
        const courseDiv = document.createElement('div');
        courseDiv.className = 'course-card';
        courseDiv.innerHTML = `
            <h3>New Course</h3>
            <p>Created: ${new Date().toLocaleDateString()}</p>
            <div class="course-actions">
                <button class="btn-secondary">Upload Content</button>
            </div>
        `;
        courseList.appendChild(courseDiv);
    });

    // Assignment Form Handling
    document.getElementById('assignment-form').addEventListener('submit', (e) => {
        e.preventDefault();
        // Here you would typically handle form submission
        alert('Assignment created successfully!');
        e.target.reset();
    });

    // Sample Notifications
    const notifications = [
        'Reminder: CS101 Midterm grades due Friday',
        'New submission in MATH201 - Assignment 3',
        'System maintenance scheduled for Saturday'
    ];

    const notificationList = document.querySelector('.notification-list');
    notifications.forEach(notification => {
        const div = document.createElement('div');
        div.className = 'notification-item';
        div.textContent = notification;
        notificationList.appendChild(div);
    });

    // Initialize default tab
    document.querySelector('.tab.active-tab').click();
});