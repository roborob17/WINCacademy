function menuFunction() {
    var getMenuKleur = document.querySelector('.menuColor');
    console.log("menuFunction = ", getMenuKleur.className);
    getMenuKleur.classList.toggle('visible');
    
}

let btnToggleNav = document.querySelector('.hamburger_icon')
    btnToggleNav.addEventListener('click', function() {
    console.log("hamburger_icon: " + btnToggleNav);
    menuFunction();
    console.log('hamburgerMenu/eventListener click worked');

}) 

let getBtnHomeGrey = document.querySelector('.home-grey');
let getBtnRed = document.querySelector('.red');
let getBtnOrange = document.querySelector('.orange');
let getBtnPurple = document.querySelector('.purple');
let getBtnGreen = document.querySelector('.green');

if (getBtnHomeGrey.addEventListener('click', function() {
        console.log("getBtnHomeGrey : ", getBtnHomeGrey);
        var getBody = document.querySelector('.body');
        console.log(" hello body :", getBody);
        getBody.classList.add('bg-grey');
        console.log("getBody.classList = ", getBody.classList);

        getBody.classList.remove('bg-red');
        getBody.classList.remove('bg-orange');
        getBody.classList.remove('bg-purple');
        getBody.classList.remove('bg-green');


        menuFunction();

    }));

else if (

    getBtnRed.addEventListener('click', function() {
        let getBtnRed = document.querySelector('.red');
        console.log("getBtnRed : ", getBtnRed);
        var getBody = document.querySelector('.body');
        console.log(" hello body :", getBody);

        getBody.classList.add('bg-red');
        console.log("getBody.classList = ", getBody.classList);

        getBody.classList.remove('bg-grey');
        getBody.classList.remove('bg-orange');
        getBody.classList.remove('bg-purple');
        getBody.classList.remove('bg-green');

        menuFunction();

    })); 

else if (

    getBtnOrange.addEventListener('click', function() {
        let getBtnOrange = document.querySelector('.orange');
        console.log("getBtnOrange : ", getBtnOrange);
        var getBody = document.querySelector('.body');
        console.log(" hello body :", getBody);

        getBody.classList.add('bg-orange');
        console.log("getBody.classList = ", getBody.classList);

        getBody.classList.remove('bg-grey');
        getBody.classList.remove('bg-red');
        getBody.classList.remove('bg-purple');
        getBody.classList.remove('bg-green');

        menuFunction();

    })); 

else if (

    getBtnPurple.addEventListener('click', function() {
        let getBtnPurple = document.querySelector('.purple');
        console.log("getBtnPurple : ", getBtnPurple);
        var getBody = document.querySelector('.body');
        console.log(" hello body :", getBody);

        getBody.classList.add('bg-purple');
        console.log("getBody.classList = ", getBody.classList);

        getBody.classList.remove('bg-grey');
        getBody.classList.remove('bg-orange');
        getBody.classList.remove('bg-red');
        getBody.classList.remove('bg-green');

        menuFunction();

    })); 

else if (

    getBtnGreen.addEventListener('click', function() {
        let getBtnGreen = document.querySelector('.green');
        console.log("getBtnGreen : ", getBtnGreen);
        var getBody = document.querySelector('.body');
        console.log(" hello body :", getBody);

        getBody.classList.add('bg-green');
        console.log("getBody.classList = ", getBody.classList);

        getBody.classList.remove('bg-grey');
        getBody.classList.remove('bg-orange');
        getBody.classList.remove('bg-purple');
        getBody.classList.remove('bg-red');

        menuFunction();

    })); 