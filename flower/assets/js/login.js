const wrapper = document.querySelector('.wrapper');
const loginlink = document.querySelector('.login-link');
const  registrerlink = document.querySelector('.registrer-link');

registrerlink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
});

