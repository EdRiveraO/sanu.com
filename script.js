function toggleMenu() {
    const menu = document.getElementById('menu');
    const icon = document.querySelector('.menu-icon');
    menu.classList.toggle('show');
    icon.classList.toggle('toggle');
    
    if (icon.classList.contains('toggle')) {
        icon.innerHTML = 'X';
    } else {
        icon.innerHTML = '&#9776;';
    }
}