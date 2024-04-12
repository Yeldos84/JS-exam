const content = document.querySelector('.content')
const p = document.querySelector('p')
const login_btn = document.querySelector('.login_btn')
const login_name = document.querySelector('.login_name')
const login_psw = document.querySelector('.login_psw')
const url = '../index.html'

login_name.value = localStorage.getItem('login')
login_psw.value = localStorage.getItem('password')
// console.log(localStorage.getItem('login'));
login_btn.addEventListener('click', ()=>{
    if (login_name.value === localStorage.getItem('login') && 
    login_psw.value === localStorage.getItem('password')){
        window.open(url, '_parent' )
    }
    else if (login_name.value != localStorage.getItem('login') && login_name.value != '') {
        let error = document.createElement('p')
        error.innerHTML = ` <p> Логин не найден, пройдите регистрацию! </p>`
        
        p.innerHTML = error.innerHTML
        p.style.color = 'red'
       
    }
    else{
        let error = document.createElement('p')
        error.innerHTML = ` <p> Логин и пароль не должен быть пустым! </p>`
        p.innerHTML = error.innerHTML
        p.style.color = 'red'
    }
})