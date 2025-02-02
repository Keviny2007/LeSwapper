// Request Swap Popup: open when swap button is clicked.
document.querySelectorAll('.swap-btn').forEach(button => {
    button.addEventListener('click', function() {
        const card = this.closest('.card');
        const email = card.getAttribute('data-email');
        document.getElementById('swap-email').innerText = email;
        document.querySelector('.popup').style.display = 'flex';
        document.querySelector('.popup-overlay').style.display = 'block';
    });
});

document.querySelectorAll('.popup-close').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.querySelectorAll('.popup-overlay').forEach(overlay => {
            overlay.style.display = 'none';
        });
    });
});

document.querySelectorAll('.popup-submit').forEach(button => {
    button.addEventListener('click', function() {
        document.querySelectorAll('.popup').forEach(popup => {
            popup.style.display = 'none';
        });
        document.querySelectorAll('.popup-overlay').forEach(overlay => {
            overlay.style.display = 'none';
        });
    });
});

// Create Swap Popup: open when create swap button is clicked.
document.querySelector('.create-swap').addEventListener('click', function() {
    document.querySelector('.create-swap-popup').style.display = 'flex';
    document.querySelector('.popup-overlay').style.display = 'block';
});

// Handle class selection and show section options
document.getElementById('class-select').addEventListener('change', function() {
    const selectedClass = this.value;
    const sectionSelect = document.getElementById('section-selection');
    const fromSection = document.getElementById('from-section');
    const toSection = document.getElementById('to-section');

    if (selectedClass) {
        sectionSelect.style.display = 'block';
        
        // Example sections for demo purposes
        const sections = {
            'CS101': ['Section A', 'Section B', 'Section C'],
            'MATH200': ['Lecture 1', 'Lecture 2'],
            'PHYS150': ['Group X', 'Group Y']
        };

        // Populate sections dynamically
        fromSection.innerHTML = '<option value="">-- Select a Section --</option>';
        toSection.innerHTML = '<option value="">-- Select a Section --</option>';
        
        sections[selectedClass].forEach(section => {
            const option1 = new Option(section, section);
            const option2 = new Option(section, section);
            fromSection.add(option1);
            toSection.add(option2);
        });
    } else {
        sectionSelect.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.querySelector('.toggle-mode');
    const themeLink = document.getElementById('theme-style');

    // Check the stored mode in localStorage
    if (localStorage.getItem('mode') === 'lebron') {
        themeLink.href = 'lebron.css';  // LeBron Mode
        toggleButton.textContent = 'Toggle Mode';
    } else {
        themeLink.href = 'normal.css';  // Normal Mode
        toggleButton.textContent = 'Toggle Mode';
    }

    // Toggle between modes
    toggleButton.addEventListener('click', function () {
        if (themeLink.href.includes('lebron.css')) {
            themeLink.href = 'normal.css';
            toggleButton.textContent = 'Toggle Mode';
            localStorage.setItem('mode', 'normal');
        } else {
            themeLink.href = 'lebron.css';
            toggleButton.textContent = 'Toggle Mode';
            localStorage.setItem('mode', 'lebron');
        }
    });
});
