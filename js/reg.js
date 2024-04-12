const content = document.querySelector('.content')
const p = document.querySelector('p')
const input_name = document.querySelector('.input_name')
const reg_btn = document.querySelector('.reg_btn')
const psw1 = document.querySelector('.psw1')
const psw2 = document.querySelector('.psw2')
const url = 'login.html'
const body = document.body

reg_btn.addEventListener('click', ()=>{
    if (psw1.value.length > 6 && psw2.value.length > 6 && psw1.value === psw2.value){
        localStorage.setItem('login', input_name.value)
        localStorage.setItem('password', psw1.value )
        console.log(input_name.value);
        let div = document.createElement('p')
        div.innerHTML = ` <p> Успешно! </p>`
        div.classList.add('text')
        content.append(div)
        setTimeout(() => {
            window.open(url, '_parent' )
        }, 2000);
        
        
    }
    else {
        let error = document.createElement('p')
        error.innerHTML = ` <p> Введите правильный пароль! </p>`
        p.innerHTML = error.innerHTML
        p.style.color = 'red'
    }
    
})

