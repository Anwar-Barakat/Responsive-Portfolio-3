//? =========================== Button Anumation  ===========================
const mainBtn = document.querySelectorAll('.button');

mainBtn.forEach((btn) => {
        btn.onmousemove = function(e) {
            const x = e.pageX - btn.offsetLeft;
            const y = e.pageY - btn.offsetTop;

            btn.style.setProperty('--x', x + 'px');
            btn.style.setProperty('--y', y + 'px');
        }
    })
    //? =========================== Button Anumation  ===========================

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


//? =========================== Fill Skills Bar Dynamically =================
const skills = document.querySelectorAll('.skills__data');
skills.forEach(skill => {
    const skillName = skill.querySelector('.skills__percentage');
    const skillValue = skillName.getAttribute('percentage');
    skillName.style.width = skillValue;
});
//? =========================== Fill Skills Bar Dynamically =================


//? =========================== According Skills ============================
const skillsContent = document.getElementsByClassName('skills__content'),
    skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
    let itemClass = this.parentNode.className;
    for (i = 0; i < skillsContent.length; i++)
        skillsContent[i].className = 'skills__content skills__close';

    if (itemClass === 'skills__content skills__close')
        this.parentNode.className = 'skills__content skills__open'
}

skillsHeader.forEach((header) => {
    header.addEventListener('click', toggleSkills)
});
//? =========================== According Skills ============================


//? =========================== Hide/Show The Work Modal ====================
const protfolioModals = document.querySelectorAll('.works__modal'),
    imgCards = document.querySelectorAll('.works__list'),
    portfolioCloseButtons = document.querySelectorAll('.works_close-btn');

var portfolioModal = function(modalClick) {
    protfolioModals[modalClick].classList.add('active')
};

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener('click', () => {
        portfolioModal(i)
    });
});

portfolioCloseButtons.forEach((portfolioCloseButton) => {
    portfolioCloseButton.addEventListener('click', () => {
        protfolioModals.forEach((protfolioModalView) => {
            protfolioModalView.classList.remove('active')
        });
    });
})

//? =========================== Hide/Show The Work Modal ====================


//? =========================== SCROLL SECTIONS ACTIVE LINK =================
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        else
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')

    })
}
window.addEventListener('scroll', scrollActive);

//? =========================== SCROLL SECTIONS ACTIVE LINK ==============


//? =========================== Change Header Background  ================
function scrollHeader() {
    const nav = document.getElementById('header');

    if (this.scrollY >= 80)
        nav.classList.add('scroll-header')
    else
        nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader);
//? =========================== Change Header Background  ================


//? =========================== Show Scroll Top  =========================
function scrollTop() {
    const scrollTop = document.getElementById('scrollTop');

    if (this.scrollY >= 600)
        scrollTop.classList.add('display-scroll')
    else
        scrollTop.classList.remove('display-scroll')
}
window.addEventListener('scroll', scrollTop);
//? =========================== Show Scroll Top  =========================


//? =========================== Dark/Light Mode  =========================
const themeButton = document.getElementById('theme-btn')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
});
//? =========================== Dark/Light Mode  =========================


//? =========================== Works Filter  ============================
$(function() {
    $('.list').click(function() {
        $(this).addClass('active').siblings().removeClass('active');

        const value = $(this).attr('data-filter');
        if (value == 'all')
            $('.work__container-content').show(500);
        else {
            $('.work__container-content').not('.' + value).hide(500);
            $('.work__container-content').filter('.' + value).show(500);
        }
    });
});
//? =========================== Works Filter  ============================

//? =========================== Change Website Color  ====================
let toggleBtn = document.querySelector('.nav__color-icon'),
    colorContainer = document.querySelector('.nav__color-container');

toggleBtn.addEventListener('click', () => {
    colorContainer.classList.toggle('active');
});



var colors = document.getElementsByClassName('change-color');
for (i = 0; i < colors.length; i++) {
    colors[i].addEventListener('click', changeColor);
}

function changeColor() {
    var color = this.getAttribute('data-color');
    document.documentElement.style.setProperty('--hue-color', color);
}
//? =========================== Change Website Color  ====================