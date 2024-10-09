document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const toggleButton = document.getElementById('toggleDarkMode');
    let storedTheme = localStorage.getItem('theme');

    // Apply the stored theme if it exists
    if (storedTheme === 'dark') {
        document.body.classList.add('dark-mode');
    } else if (storedTheme === 'light') {
        document.body.classList.remove('dark-mode');
    } else {
        // No stored theme, use system preference
        if (prefersDarkScheme.matches) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
    }

    // Toggle button to switch between modes
    toggleButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            document.body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        } else {
            document.body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    });
});