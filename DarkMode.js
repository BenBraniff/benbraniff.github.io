 // initializes the localStorage to whatever it is currently
if (document.body.classList.contains('dark-mode')) {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}

// Check for system preference on page load
const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
const toggleButton = document.getElementById('toggleDarkMode');

// Check if user has manually set a preference
let storedTheme = localStorage.getItem('theme');

if (storedTheme === 'dark') {
    document.body.classList.add('dark-mode');
} else if (storedTheme === 'light') {
    document.body.classList.remove('dark-mode');
} else if (prefersDarkScheme.matches) {
    document.body.classList.add('dark-mode'); // Apply system preference
}

// Toggle button to switch between modes
toggleButton.addEventListener('click', function () {
    if (document.body.classList.contains('dark-mode')) {
        document.body.classList.remove('dark-mode');
    } else {
        document.body.classList.add('dark-mode');
    }
});
