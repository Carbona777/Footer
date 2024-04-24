// Wait for the DOM to fully load before accessing elements
document.addEventListener('DOMContentLoaded', () => {
    // Selecting DOM elements
    const body = document.querySelector('body');
    const sidebar = body.querySelector('.sidebar');
    const toggle = body.querySelector('.toggle');
    const searchBtn = body.querySelector('.search-box');
    const modeSwitch = body.querySelector('.toggle-switch');
    const modeText = body.querySelector('.mode-text');

    // Event listener for toggle button
    toggle.addEventListener('click', () => {
        sidebar.classList.toggle('close');
    });

    // Event listener for search button
    searchBtn.addEventListener('click', () => {
        sidebar.classList.remove('close');
    });

    // Event listener for mode switch
    modeSwitch.addEventListener('click', () => {
        body.classList.toggle('dark');
        if (body.classList.contains('dark')) {
            modeText.innerText = 'Light Mode';
        } else {
            modeText.innerText = 'Dark Mode';
        }
    });
});
