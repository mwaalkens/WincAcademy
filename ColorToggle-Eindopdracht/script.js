// Define variables
let toggleNavVisible = false;
let colorActive = 'home';
let keyboardColor = 'home';
let keyboardItem = undefined;

// Define menu EventListeners toggle
const menuicon = document.querySelector('#btn-nav img');
const totalMenu = document.querySelector('.nav-main');
const colorMenu = document.querySelector('#menu-color');

menuicon.addEventListener('click', function () {
    toggleNav();
});

//hovering
menuicon.addEventListener('mouseenter', function () {
    toggleNavVisible = false;
    toggleNav();
});
totalMenu.addEventListener('mouseleave', function () {
    toggleNavVisible = true;
    toggleNav();
});

// Define Eventlisteners colorToggle
const colorBody = document.querySelector('#body');
const colorHome = document.querySelector('#menu-color li:nth-child(1)');
const colorRed = document.querySelector('#menu-color li:nth-child(2)');
const colorOrange = document.querySelector('#menu-color li:nth-child(3)');
const colorYellow = document.querySelector('#menu-color li:nth-child(4)');
const colorGreen = document.querySelector('#menu-color li:nth-child(5)');
const colorBlue = document.querySelector('#menu-color li:nth-child(6)');
const colorPurple = document.querySelector('#menu-color li:nth-child(7)');

colorHome.addEventListener('click', function () {
    colorToggle('home', colorHome);
});
colorRed.addEventListener('click', function () {
    colorToggle('red', colorRed);
});
colorOrange.addEventListener('click', function () {
    colorToggle('orange', colorOrange);
});
colorYellow.addEventListener('click', function () {
    colorToggle('yellow', colorYellow);
});
colorGreen.addEventListener('click', function () {
    colorToggle('green', colorGreen);
});
colorBlue.addEventListener('click', function () {
    colorToggle('blue', colorBlue);
});
colorPurple.addEventListener('click', function () {
    colorToggle('purple', colorPurple);
});

//colorToggle when number keys are pressed
document.addEventListener('keydown', function (e) {
    let returnedKeyboardColor = keyboardFunction(e);
    colorToggle(returnedKeyboardColor[0], returnedKeyboardColor[1])
});


// Define used functions
// toggle visibilty of the color menu
const toggleNav = function () {
    if (toggleNavVisible === false) {
        colorMenu.classList.add('show')
    } else if (toggleNavVisible === true) {
        colorMenu.classList.remove('show')
    }
    toggleNavVisible = !toggleNavVisible;
    return
}

// Define color variables when keyboard numbers are pressed
const keyboardFunction = function (keyboard) {
    if (keyboard.key == 1) {
        keyboardColor = 'home';
        keyboardItem = colorHome;
    } else if (keyboard.key == 2) {
        keyboardColor = 'red';
        keyboardItem = colorRed;
    } else if (keyboard.key == 3) {
        keyboardColor = 'orange';
        keyboardItem = colorOrange;
    } else if (keyboard.key == 4) {
        keyboardColor = 'yellow';
        keyboardItem = colorYellow;
    } else if (keyboard.key == 5) {
        keyboardColor = 'green';
        keyboardItem = colorGreen;
    } else if (keyboard.key == 6) {
        keyboardColor = 'blue';
        keyboardItem = colorBlue;
    } else if (keyboard.key == 7) {
        keyboardColor = 'purple';
        keyboardItem = colorPurple;
    }

    toggleNavVisible = true;
    return [keyboardColor, keyboardItem]
}

// Toggle background color, set color as active, set title, and toggle color menu
const colorToggle = function (color, element) {
    let menuActive = document.querySelector('#active');
    menuActive.removeAttribute('id');

    colorActive = color;
    colorBody.classList.remove('home', 'red', 'orange', 'yellow', 'green', 'blue', 'purple');
    if (colorActive == 'home') {
        colorBody.classList.add('home');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'red') {
        colorBody.classList.add('red');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'orange') {
        colorBody.classList.add('orange');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'yellow') {
        colorBody.classList.add('yellow');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'green') {
        colorBody.classList.add('green');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'blue') {
        colorBody.classList.add('blue');
        element.setAttribute('id', 'active');
    } else if (colorActive == 'purple') {
        colorBody.classList.add('purple');
        element.setAttribute('id', 'active');
    }

    let title = 'Color Toggle - ' + color;
    document.title = title;

    toggleNav();
    return
}
