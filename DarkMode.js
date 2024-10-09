// function ToggleMode() {
//    var element = document.Body;
//    element.classList.toggle("dark-mode");
// }

// Select the toggle button
const darkModeToggle = document.getElementById('darkModeToggle');

// Function to toggle dark mode
darkModeToggle.addEventListener('click', function() {
    // Toggle the "dark-mode" class on the body
    document.body.classList.toggle('dark-mode');

    // Optional: Store the mode in localStorage to remember the user's preference
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved user preference and apply it on page load
window.addEventListener('load', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    }
});

