/ This file contains the JavaScript code for the website.
// It includes functions to handle user interactions and link to the Discord server.

document.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    if (welcomeMessage) {
        welcomeMessage.textContent = "Welcome to the Hello website! We're glad to have you here.";
    }

    const themeToggle = document.getElementById('theme-toggle');
    const root = document.documentElement;
    const storedTheme = window.localStorage.getItem('theme');

    const applyTheme = (theme) => {
        root.setAttribute('data-theme', theme);
        window.localStorage.setItem('theme', theme);
        if (themeToggle) {
            themeToggle.textContent = theme === 'dark' ? 'Light Theme' : 'Dark Theme';
        }
    };

    const initialTheme = storedTheme || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    applyTheme(initialTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
        });
    }

});
