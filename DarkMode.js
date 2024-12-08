document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.getElementById('darkModeToggle');
    let storedTheme = localStorage.getItem('theme');

    // Apply the stored theme if it exists or default to dark mode
    if (storedTheme === 'light') {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
    } else {
        // Default to dark mode if no stored theme or the stored theme is dark
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
    }

    // Toggle button to switch between dark and light modes
    toggleButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});
