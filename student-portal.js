document.addEventListener('DOMContentLoaded', () => {
    // Tab Switching Logic
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelectorAll('.tab-content').forEach(content => {
                content.classList.add('hidden');
            });
            document.getElementById(tab.dataset.tab).classList.remove('hidden');
            tabs.forEach(t => t.classList.remove('active-tab'));
            tab.classList.add('active-tab');
        });
    });

    // Sample Data (Replace with API calls)
    const courses = [
        { id: 1, name: 'Introduction to Computer Science', code: 'CS101', progress: 65 },
        { id: 2, name: 'Calculus I', code: 'MATH201', progress: 40 }
    ];

    const assignments = [
        { course: 'CS101', title: 'Programming Assignment 1', due: '2023-12-15', status: 'submitted' },
        { course: 'MATH201', title: 'Limits Problem Set', due: '2023-12-18', status: 'pending' }
    ];

    // Populate Courses
    const courseGrid = document.querySelector('.course-grid');
    courses.forEach(course => {
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${course.code}</h3>
            <p>${course.name}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${course.progress}%"></div>
            </div>
            <button class="btn-secondary view-course">View Materials</button>
        `;
        courseGrid.appendChild(card);
    });

    // Populate Assignments
    const assignmentList = document.querySelector('.assignment-list');
    assignments.forEach(assignment => {
        const item = document.createElement('div');
        item.className = 'assignment-item';
        item.innerHTML = `
            <div>
                <h4>${assignment.title}</h4>
                <small>${assignment.course} • Due: ${assignment.due}</small>
            </div>
            <div class="submission-status ${assignment.status}">
                ${assignment.status.charAt(0).toUpperCase() + assignment.status.slice(1)}
            </div>
        `;
        assignmentList.appendChild(item);
    });

    // Initialize Chart.js for progress visualization
    const ctx = document.getElementById('progressChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: courses.map(c => c.code),
            datasets: [{
                label: 'Course Progress (%)',
                data: courses.map(c => c.progress),
                backgroundColor: ['#007bff', '#28a745']
            }]
        }
    });

    // Mock Enrollment
    document.querySelector('.enroll-course').addEventListener('click', () => {
        // Replace with actual enrollment logic
        const newCourse = {
            id: 3,
            name: 'Physics 101',
            code: 'PHY101',
            progress: 0
        };
        courses.push(newCourse);
        const card = document.createElement('div');
        card.className = 'course-card';
        card.innerHTML = `
            <h3>${newCourse.code}</h3>
            <p>${newCourse.name}</p>
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${newCourse.progress}%"></div>
            </div>
            <button class="btn-secondary view-course">View Materials</button>
        `;
        courseGrid.appendChild(card);
    });

    // Initialize default tab
    document.querySelector('.tab.active-tab').click();
});