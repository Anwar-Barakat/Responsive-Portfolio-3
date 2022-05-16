//? =========================== Show Navbar  ================================
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

if (navToggle)
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    });

if (navClose)
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    });
//? =========================== Show Navbar  ================================


//? =========================== Remove Menu Mobile ==========================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));
//? =========================== Remove Menu Mobile ==========================


//? =========================== Fill skills bar dynamically =================
const skills = document.querySelectorAll('.skills__data');
skills.forEach(skill => {
    const skillName = skill.querySelector('.skills__percentage');
    const skillValue = skillName.getAttribute('percentage');
    skillName.style.width = skillValue;
});
//? =========================== Fill skills bar dynamically =================