const menuIcon = document.querySelector('#menu-icon'); 
const navbar = document.querySelector('.navbar'); // Fixed typo from 'documenty' to 'document'

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');  // This toggles the 'bx-x' class for changing the icon
    navbar.classList.toggle('active');  // This toggles the 'active' class for showing/hiding the menu
}
