'use strict';
// ----------------- MODAL WINDOW -----------------

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const nav = document.querySelector('.nav');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');


const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

btnsOpenModal.forEach(button => {
    button.addEventListener('click', openModal);
})

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal)

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
})

/////////////////////////////////////////////////////////////
// -----------------Implement smooth scrolling on Learn more button -----------------


btnScrollTo.addEventListener('click', (e) => {
    // get the coordinates of the section relative to the window
    const s1coords = section1.getBoundingClientRect();

    // Old way to do it --> Suppport in all browsers
    // Scrolling
    // window.scrollTo(s1coords.left + window.pageXOffset, s1coords.top + window.pageYOffset);

    // window.scrollTo({
    //     left: s1coords.left + window.pageXOffset,
    //     top:  s1coords.top + window.pageYOffset,
    //     behavior: 'smooth',
    // });

    // Modern way
    section1.scrollIntoView({ behavior: 'smooth' })

});
/////////////////////////////////////////////////////////////
// ----------------- Page navigation -----------------
// document.querySelectorAll('.nav__link').forEach(function(el) {
//     el.addEventListener('click', function(e) {
//         e.preventDefault();

//         const id = this.getAttribute('href');
//         document.querySelector(id).scrollIntoView({behavior: 'smooth'});        
//     });
// });

//  -----------------Using EVENT DELEGATION -----------------
// 1. Add event listener to common parent element
// 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
    e.preventDefault();
    // Matching strategy
    if (e.target.classList.contains('nav__link')) {

        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
        });
    };
});

/////////////////////////////////////////////////////////////
// ----------------- BUILDING A TABBED COMPONENT -----------------

tabsContainer.addEventListener('click', function (el) {
    const clicked = el.target.closest('.operations__tab');
    tabs.forEach(tab => {
        tab.classList.remove('operations__tab--active');
    })

    // GUARD CLAUSE
    if (!clicked) return;

    clicked.classList.add('operations__tab--active');

    // Activate the content area

    tabsContent.forEach(tab => {
        tab.classList.remove('operations__content--active');
    })
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');
})

/////////////////////////////////////////////////////////////
// ----------------- MENU FADE ANIMATION -----------------
const handleNavEffect = function (e) {
    if (e.target.classList.contains('nav__link')) {
        const link = e.target;
        const siblinks = link.closest('.nav').querySelectorAll('.nav__link');
        const logo = link.closest('.nav').querySelector('img');

        siblinks.forEach(el => {
            if (el !== link) el.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}

// Passing an "argument" into handler
nav.addEventListener('mouseover', handleNavEffect.bind(0.5));

nav.addEventListener('mouseout', handleNavEffect.bind(1));

/////////////////////////////////////////////////////////////
// ----------------- IMPLEMENT STICKY NAVIGATION -----------------

// this is bad for performance especially on a mobile device 
// const initalCords = section1.getBoundingClientRect();
// window.addEventListener('scroll', function(e) {
//     console.log(window.scrollY);
//     if (Number.parseFloat(window.scrollY) > initalCords.top) {
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }

// })

// Using the intersection observer API
// --> allows the code to observe changes the way one element reacts to another
// // --> the callback funtion is called everytime the item intersects with the root item at the threshold
// const observerCallback = function(entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry);
//         console.log(`Is it intersecting: ${entry.isIntersecting}`);
//     })
// }

// const observerOptions = {
//     root: null,
//     threshold: [0, 0.2],
// };

// const observer = new IntersectionObserver(observerCallback, observerOptions);
// observer.observe(section1);

const header = document.querySelector('.header');

const stickyNav = function (entries) {
    const [entry] = entries;
    entry.isIntersecting ? nav.classList.remove('sticky') : nav.classList.add('sticky');
}


const headerObserver = new IntersectionObserver(stickyNav, {
    root: null,
    threshold: 0,
    rootMargin: '-90px'
});
headerObserver.observe(header);


/////////////////////////////////////////////////////////////
// ----------------- IMPLEMENT SECTIONS ANIMATION -----------------

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('section--hidden');
    observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
    root: null,
    threshold: 0.15,
});

allSections.forEach(section => {
    sectionObserver.observe(section);
    section.classList.add('section--hidden');
})


/////////////////////////////////////////////////////////////
// ----------------- IMPLEMENT LAZY LOADING IMAGES -----------------
// great for performance!
const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
    const [entry] = entries;

    if (!entry.isIntersecting) return;

    // replace the source attr with data-src
    entry.target.src = entry.target.dataset.src

    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    })

    observer.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImg, {
    root: null,
    threshold: 0,
    rootMargin: '-200px',
})

imgTargets.forEach(img => {
    imgObserver.observe(img);
})
/////////////////////////////////////////////////////////////
// ----------------- IMPLEMENT SLIDER COMPONENT -----------------

// DOM variables
const slider = function () {

    const slides = document.querySelectorAll('.slide');

    const btnLeft = document.querySelector('.slider__btn--left');
    const btnRight = document.querySelector('.slider__btn--right');
    const dotContainer = document.querySelector('.dots')
    let currentSlide = 0;
    const maxSlide = slides.length;

    // Function declarations
    const createDots = function () {
        slides.forEach(function (_, i) {
            dotContainer.insertAdjacentHTML('beforeend',
                `<button
                class="dots__dot" 
                data-slide="${i}">
                </button>`
            );
        })
    }


    const activateDot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => dot.classList.remove('dots__dot--active'));

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }


    const goToSlide = function (slide) {
        slides.forEach((s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`));
        activateDot(currentSlide);

    }


    const nextSlide = function () {
        if (currentSlide === maxSlide - 1) {
            currentSlide = 0;
        } else {
            currentSlide++;
        }
        goToSlide(currentSlide);
    }

    const prevSlide = function () {
        if (currentSlide === 0) {
            currentSlide = maxSlide - 1;
        } else {
            currentSlide--;
        }
        goToSlide(currentSlide);
        activateDot(currentSlide);
    }

    // Initialization of functions
    const init = function () {
        createDots();

        goToSlide(0);
        activateDot(0);
    }

    init();

    // Next slide
    btnRight.addEventListener('click', nextSlide);
    btnLeft.addEventListener('click', prevSlide);

    document.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowLeft') prevSlide();
        e.key === 'ArrowRight' && nextSlide();
    })

    dotContainer.addEventListener('click', function (e) {
        if (e.target.classList.contains('dots__dot')) {
            const { slide } = e.target.dataset;
            goToSlide(slide)
            activateDot(slide);
        }
    })
}
slider();

/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
//////////////////////////TESTING////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////

// learn about .insertAdjacentHTML
// const header = document.querySelector('header');

// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.innerHTML = 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button?';

// header.append(message);
// document.querySelector('.btn--close-cookie').addEventListener('click', () => {
//     message.remove();
// })

// // ----------------- Styles -----------------
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// message.style.height = Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ----------------- Attributes -----------------
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

//  -----------------Classes -----------------
// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');



// ----------------- EVENT LISTENERS -----------------
// mouse enter
// const h1 = document.querySelector('h1');
// h1.addEventListener('mouseenter', (e) => {
//     console.log('You are reading the heading')
// })

// h1.onmouseenter = (e) => {
//     console.log('This is an alternative way');
// }

// ----------------- Event Propagation && Bubbling -----------------

// rgb(225,255,255)
// const randomInt = (min, max) => Math.floor(Math.random() * (max-min+1) + min);
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`

// document.querySelector('.nav__link').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav__links').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();
// })

// document.querySelector('.nav').addEventListener('click', function(e) {
//     this.style.backgroundColor = randomColor();

// })

// ----------------- DOM TRAVERSING -----------------

// const h1 = document.querySelector('h1');

// // ----------------- GOING DOWNARDS -----------------
// // -- child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.children);
// console.log(h1.childNodes);
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
// // ----------------- GOING UPWARDS -----------------
// // -- parents
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest('.header').style.background = 'var(--gradient-secondary)';

// h1.closest('h1').style.background = 'var(--gradient-primary)';

// // ----------------- GOING SIDEWAYS -----------------
// // -- siblings

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.previousSibling);
// console.log(h1.nextSibling);
// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(function(el) {
//     if (el !== h1) {
//         el.style.transform = 'scale(1.1)';
//     }
// })

