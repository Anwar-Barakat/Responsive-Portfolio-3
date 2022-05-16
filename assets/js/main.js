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


//? =========================== Hide/Show the work modal ====================
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

//? =========================== Hide/Show the work modal ====================