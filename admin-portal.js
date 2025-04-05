
        // Show/hide sections
        function showSection(sectionId) {
            // Hide all
            document.querySelectorAll('#dashboard, #users, #courses, #reports, #settings').forEach(el => {
                el.classList.remove('active-section');
            });
            
            // Show selected
            document.getElementById(sectionId).classList.add('active-section');
            
            // Update menu
            document.querySelectorAll('.menu-item').forEach(item => {
                item.classList.remove('active');
            });
            event.currentTarget.classList.add('active');
        }
        
        // Modal functions
        function openModal(id) {
            document.getElementById(id).style.display = 'flex';
        }
        
        function closeModal(id) {
            document.getElementById(id).style.display = 'none';
        }
        
        // Initialize
        document.addEventListener('DOMContentLoaded', function() {
            showSection('dashboard');
        });
        function showSection(sectionId, event) {
    // Hide all sections
    document.querySelectorAll('#dashboard, #users, #courses, #reports, #settings').forEach(el => {
        el.style.display = 'none';
    });

    // Show selected section
    document.getElementById(sectionId).style.display = 'block';

    // Update menu item highlighting
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });

    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}

    