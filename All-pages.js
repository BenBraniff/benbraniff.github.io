document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const toggleButton = document.getElementById('darkModeToggle');
    let storedTheme = localStorage.getItem('theme');

    // Define image mappings
    const imageMappings = {
        github: {
            dark: 'center-cat-white.svg',
            light: 'center-cat-black.svg'
        },
        resume: {
            dark: 'Resume-white.svg',
            light: 'Resume-black.svg'
        },
        linkedin: {
            dark: 'linkedin.svg',
            light: 'linkedin.svg'
        },
        leetcode: {
            dark: 'leetcode-whitebar.svg',
            light: 'leetcode-blackbar.svg'
        },
        xProfile: {
            dark: 'center-x-text-white.svg',
            light: 'center-x-text-black.svg'
        },
        monkeytype: {
            dark: 'monkeytype-cropped.png',
            light: 'monkeytype-cropped.png'
        }
    };

    // Function to update image sources based on the current theme
    function updateImageSources(mode) {
        const images = document.querySelectorAll('img[data-key]');
        images.forEach(img => {
            const key = img.getAttribute('data-key'); // Get the key from data-key
            if (imageMappings[key]) {
                // console.log(`Updating ${key}: ${img.src} -> ${imageMappings[key][mode]}`);
                img.src = imageMappings[key][mode]; // Update the src based on mode
            }
        });
    }

    // Apply the stored theme or system preference
    function applyTheme(theme) {
        if (theme === 'light') {
            document.body.classList.add('light-mode');
            document.body.classList.remove('dark-mode');
            updateImageSources('light');
        } else {
            document.body.classList.add('dark-mode');
            document.body.classList.remove('light-mode');
            updateImageSources('dark');
        }
    }

    // Check if the user has a stored theme preference
    if (storedTheme === 'light') {
        applyTheme('light');
    } else if (storedTheme === 'dark') {
        applyTheme('dark');
    } else {
        // No stored preference, follow system preference
        const initialTheme = prefersDarkScheme.matches ? 'dark' : 'light';
        applyTheme(initialTheme);
    }

    // Toggle button to switch between dark and light modes
    toggleButton.addEventListener('click', function () {
        if (document.body.classList.contains('dark-mode')) {
            applyTheme('light');
            localStorage.setItem('theme', 'light');
        } else {
            applyTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
    });

    // Update theme if system preferences change and no stored preference exists
    prefersDarkScheme.addEventListener('change', function (e) {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            applyTheme(newTheme);
        }
    });
});
