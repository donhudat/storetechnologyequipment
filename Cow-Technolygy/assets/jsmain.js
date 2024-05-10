
// open login 1
const modals = document.querySelector('.js-modal')
const logins = document.querySelector('.js-login')

function showlogin() {
    modals.classList.add('open')
}
    logins.addEventListener('click',showlogin)

// open login 2
const login_in_register= document.querySelector('.js-modal-in--register')

function showlogin_closeregister() {
    modals.classList.add('open')
    modalregister.classList.remove('open')
}
login_in_register.addEventListener('click',showlogin_closeregister)


// close login 1
const overlays = document.querySelector('.js-modal__overlay')

function closelogin() {
    modals.classList.remove('open')
}

 overlays.addEventListener("click",closelogin) 
// close login 2 
 const btnback = document.querySelector('.js-btn-back')
 btnback.addEventListener("click",closelogin) 

 // open register 1 
const modalregister = document.querySelector('.js-modal__register')
const register = document.querySelector('.js-register')

function showregister() {
    modalregister.classList.add('open')
}
    register.addEventListener('click',showregister)
//open register 2 

const register_in_login = document.querySelector('.js-modal-in--login')

function showregister_closelogin() {
    modals.classList.remove('open')
    modalregister.classList.add('open')
}
register_in_login.addEventListener('click',showregister_closelogin)


// close register 1 

const overlayregister = document.querySelector('.js-modal__overlay--register')

function closeregister() {
    modalregister.classList.remove('open')
}

overlayregister.addEventListener("click",closeregister) 

 //close register 2 

const btnbackregister = document.querySelector('.js-btn-back--register')
btnbackregister.addEventListener("click",closeregister)

