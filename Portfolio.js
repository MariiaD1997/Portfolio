
const openButtons = document.querySelectorAll('[data-window-target]');
const closeButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = document.querySelector(button.dataset.windowTarget);
        openWindow(window);
    })
})

closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const window = button.closest('.window');
        closeWindow(window);
    })
})

overlay.addEventListener('click', () => {
    const windows = document.querySelectorAll('.window.active');
    windows.forEach(window => {
        closeWindow(window);
    })
})

const openWindow = (window) => {
    if (window == null) return
    window.classList.add("active");
    overlay.classList.add("active");
}

const closeWindow = (window) => {
    if (window == null) return
    window.classList.remove('active');
    overlay.classList.remove('active');
}

const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navbarLinks = document.getElementsByClassName('navbar-links')[0];

toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active');
})