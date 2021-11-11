document.addEventListener('DOMContentLoaded', () => {
    let header = document.getElementById('header');
    let menu = document.getElementById('menu');
    let body = document.getElementsByTagName('body')[0];
    let navbarMenu = document.getElementById('navbar-menu');
    window.onscroll = () => { stickyHeader() }

    // Header Fixed
    function stickyHeader() {
        if (window.pageYOffset > 0) {
            header.classList.add('fixed-top')
        } else {
            header.classList.remove('fixed-top')
        }
        
    }

    menu.addEventListener('click', () => {
        if (navbarMenu.style.display === "block") 
        {
            navbarMenu.style.display = 'none';
        } else {
            navbarMenu.style.display = "block";
        }
    })
});