document.addEventListener('DOMContentLoaded', function () {
    const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
    const toggleButton = document.getElementById('darkModeToggle');
    let storedTheme = localStorage.getItem('theme');

    // Define image mappings
    const imageMappings = {
        github: {
            dark: 'github-dark.svg',
            light: 'github-light.svg'
        },
        resume: {
            dark: 'resume-2.svg',
            light: 'resume-2.svg'
        },
        linkedin: {
            dark: 'linkedin.svg',
            light: 'linkedin.svg'
        },
        leetcode: {
            dark: 'leetcode-dark.svg',
            light: 'leetcode-light.png'
        },
        xProfile: {
            dark: 'x-dark.svg',
            light: 'x-light.svg'
        },
        monkeytype: {
            dark: 'monkeytype.png',
            light: 'monkeytype.png'
        }
    };

    // Function to update image sources based on the current theme
    function updateImageSources(mode) {
        const images = document.querySelectorAll('img[data-key]');
        images.forEach(img => {
            const key = img.getAttribute('data-key'); // Get the key from data-key
            if (imageMappings[key]) {
                console.log(`Updating ${key}: ${img.src} -> ${imageMappings[key][mode]}`);
                img.src = imageMappings[key][mode]; // Update the src based on mode
            }
            else {
                console.error(`No mapping found for key: ${key}`);
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
