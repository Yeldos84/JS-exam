const section__main = document.querySelector('.section__main')
const temp1 = document.querySelector('#temp')
const main__name = document.querySelector('.main__name')
const section__main__a = document.querySelector('.section__main__a')
const section__main__img = document.querySelector('.section__main__img')
const btn = document.querySelector('.main_btn')
const btn2 = document.querySelector('.btn2')
const enter = document.querySelector('.enter')
const link = document.querySelector('.link')
const watch = document.querySelector('.watch')
const select = document.querySelector('#select')
const select__btn = document.querySelector('.select__btn')
const input = document.querySelector('input')
const input__btn = document.querySelector('.input__btn')

const genders = "боевик"
const body = document.body
const options = {
    method: 'GET',
    headers: {accept: 'application/json', 'X-API-KEY': 'Z9Z6KVB-51VMG05-N7N4N89-5GH8BZH'}
  };
// console.log(btn.innerHTML);

years = select.value

if (localStorage.getItem('login') !== null){
    enter.innerHTML = ` <i>Привет</i>, ${localStorage.getItem('login')}`
    
    
}
else {
    // console.log(link.innerHTML);
    link.innerHTML 
}


    fetch(`https://api.kinopoisk.dev/v1.4/movie?year=2024&genres.name=${genders}`, options)
        .then(respons => respons.json())
        .then(answer => {
            // console.log(answer);
            
            for(let i=1; i<answer.docs.length; i++){
                // console.log(answer.docs[i].poster.url);
                let div = document.createElement('div')
                let img = document.createElement("img");
                let name = document.createElement("p");
                let countries = document.createElement("p");
                let rating = document.createElement("p");
                let imdb = document.createElement("p");
                let add_btn = document.createElement("button");
                let year = document.createElement("p");
                
                add_btn.classList.add('add_btn')
                img.classList.add('images')
                name.classList.add('name')
                year.innerHTML = answer.docs[i].year
                name.innerHTML = answer.docs[i].name
                img.src = answer.docs[i].poster.url
                // img.textContent = `Название:${answer.docs[i].name}`
                countries.innerHTML = answer.docs[i].countries[0].name
                // console.log(answer.docs[i].countries[0]);
                rating.innerHTML = answer.docs[i].rating.kp
                imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
                imdb.style.color = 'blue'
                
                watch_count = 0

                if (answer.docs[i].poster.url !== null){
                    // console.log(img);
                    
                    section__main.append(img)
                    // main__name.append(name)
                    img.insertAdjacentElement('afterend', name)
                    
                    name.insertAdjacentElement('beforeend', countries)
                    name.insertAdjacentElement('beforeend', imdb)
                    name.insertAdjacentElement('beforeend', add_btn)
                    name.insertAdjacentElement('afterbegin', rating)
                    name.insertAdjacentElement('afterbegin', year)
                }
                add_btn.addEventListener('click', function(event){
                    if (event.type === 'click'){
                        watch_count +=1
                        add_btn.classList.toggle('add_btn_on')
                        watch.style.color = 'red'
                        watch.style.display = 'flex'
                        
                        let temp = document.createElement('p')
                        temp.innerHTML = watch_count
                     
                        temp1.innerHTML = temp.innerHTML
                        // console.log(watch_count);
                    }
                    else{
                        watch_count = 0
                    }
                })
                
            }
            
           
            

        })



// function select_year(){
//     fetch(`https://api.kinopoisk.dev/v1.4/movie?year=${years}&genres.name=${genders}`, options)
//         .then(respons => respons.json())
//         .then(answer => {
//             // console.log(answer);
//             section__main.innerHTML = ''
//             for(let i=1; i<answer.docs.length; i++){
//                 console.log(answer.docs[i].poster.url);
//                 let div = document.createElement('div')
//                 let img = document.createElement("img");
//                 let name = document.createElement("p");
//                 let countries = document.createElement("p");
//                 let rating = document.createElement("p");
//                 let imdb = document.createElement("p");
//                 let add_btn = document.createElement("button");
//                 let year = document.createElement("p");
//                 add_btn.classList.add('add_btn')
//                 img.classList.add('images')
//                 name.classList.add('name')
//                 year.innerHTML = answer.docs[i].year
//                 name.innerHTML = answer.docs[i].name
//                 img.src = answer.docs[i].poster.url
//                 // img.textContent = `Название:${answer.docs[i].name}`
//                 countries.innerHTML = answer.docs[i].countries[0].name
//                 console.log(answer.docs[i].countries[0]);
//                 rating.innerHTML = answer.docs[i].rating.kp
//                 imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
//                 imdb.style.color = 'blue'
                
//                 watch_count = 0

//                 if (answer.docs[i].poster.url !== null){
                    
//                     section__main.append(img)
//                     // main__name.append(name)
//                     img.insertAdjacentElement('afterend', name)
                    
//                     name.insertAdjacentElement('beforeend', countries)
//                     name.insertAdjacentElement('beforeend', imdb)
//                     name.insertAdjacentElement('beforeend', add_btn)
//                     name.insertAdjacentElement('afterbegin', rating)
//                     name.insertAdjacentElement('afterbegin', year)
//                 }
//                 add_btn.addEventListener('click', function(event){
//                     if (event.type === 'click'){
//                         watch_count +=1
//                         add_btn.classList.toggle('add_btn_on')
//                         watch.style.color = 'red'
//                         watch.style.display = 'flex'
                        
//                         let temp = document.createElement('p')
//                         temp.innerHTML = watch_count
                     
//                         temp1.innerHTML = temp.innerHTML
//                         // console.log(watch_count);
//                     }
//                     else{
//                         watch_count = 0
//                     }
//                 })
                
//             }
            
           
            

//         })
// }



   
    select__btn.onclick = function(){
        console.log(select.value);
        if (select.value === '2023'){
            fetch(`https://api.kinopoisk.dev/v1.4/movie?year=${select.value}&genres.name=${genders}`, options)
            .then(respons => respons.json())
            .then(answer => {
                // console.log(answer);
                section__main.innerHTML = ''
                for(let i=1; i<answer.docs.length; i++){
                    // console.log(answer.docs[i].poster.url);
                    let div = document.createElement('div')
                    let img = document.createElement("img");
                    let name = document.createElement("p");
                    let countries = document.createElement("p");
                    let rating = document.createElement("p");
                    let imdb = document.createElement("p");
                    let add_btn = document.createElement("button");
                    let year = document.createElement("p");
                    add_btn.classList.add('add_btn')
                    img.classList.add('images')
                    name.classList.add('name')
                    year.innerHTML = answer.docs[i].year
                    name.innerHTML = answer.docs[i].name
                    img.src = answer.docs[i].poster.url
                    // img.textContent = `Название:${answer.docs[i].name}`
                    countries.innerHTML = answer.docs[i].countries[0].name
                    // console.log(answer.docs[i].countries[0]);
                    rating.innerHTML = answer.docs[i].rating.kp
                    imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
                    imdb.style.color = 'blue'
                    
                    watch_count = 0

                    if (answer.docs[i].poster.url !== null){
                        
                        section__main.append(img)
                        // main__name.append(name)
                        img.insertAdjacentElement('afterend', name)
                        
                        name.insertAdjacentElement('beforeend', countries)
                        name.insertAdjacentElement('beforeend', imdb)
                        name.insertAdjacentElement('beforeend', add_btn)
                        name.insertAdjacentElement('afterbegin', rating)
                        name.insertAdjacentElement('afterbegin', year)
                    }
                    add_btn.addEventListener('click', function(event){
                        if (event.type === 'click'){
                            watch_count +=1
                            add_btn.classList.toggle('add_btn_on')
                            watch.style.color = 'red'
                            watch.style.display = 'flex'
                            
                            let temp = document.createElement('p')
                            temp.innerHTML = watch_count
                        
                            temp1.innerHTML = temp.innerHTML
                            // console.log(watch_count);
                        }
                        else{
                            watch_count = 0
                        }
                    })
                    
                }
                
            
                

            })
        }
        else if (select.value === '2022'){
            fetch(`https://api.kinopoisk.dev/v1.4/movie?year=${select.value}&genres.name=${genders}`, options)
            .then(respons => respons.json())
            .then(answer => {
                // console.log(answer);
                section__main.innerHTML = ''
                for(let i=1; i<answer.docs.length; i++){
                    // console.log(answer.docs[i].poster.url);
                    let div = document.createElement('div')
                    let img = document.createElement("img");
                    let name = document.createElement("p");
                    let countries = document.createElement("p");
                    let rating = document.createElement("p");
                    let imdb = document.createElement("p");
                    let add_btn = document.createElement("button");
                    let year = document.createElement("p");
                    add_btn.classList.add('add_btn')
                    img.classList.add('images')
                    name.classList.add('name')
                    year.innerHTML = answer.docs[i].year
                    name.innerHTML = answer.docs[i].name
                    img.src = answer.docs[i].poster.url
                    // img.textContent = `Название:${answer.docs[i].name}`
                    countries.innerHTML = answer.docs[i].countries[0].name
                    // console.log(answer.docs[i].countries[0]);
                    rating.innerHTML = answer.docs[i].rating.kp
                    imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
                    imdb.style.color = 'blue'
                    
                    watch_count = 0

                    if (answer.docs[i].poster.url !== null){
                        
                        section__main.append(img)
                        // main__name.append(name)
                        img.insertAdjacentElement('afterend', name)
                        
                        name.insertAdjacentElement('beforeend', countries)
                        name.insertAdjacentElement('beforeend', imdb)
                        name.insertAdjacentElement('beforeend', add_btn)
                        name.insertAdjacentElement('afterbegin', rating)
                        name.insertAdjacentElement('afterbegin', year)
                    }
                    add_btn.addEventListener('click', function(event){
                        if (event.type === 'click'){
                            watch_count +=1
                            add_btn.classList.toggle('add_btn_on')
                            watch.style.color = 'red'
                            watch.style.display = 'flex'
                            
                            let temp = document.createElement('p')
                            temp.innerHTML = watch_count
                        
                            temp1.innerHTML = temp.innerHTML
                            // console.log(watch_count);
                        }
                        else{
                            watch_count = 0
                        }
                    })
                    
                }
                
            
                

            })
        }
        else if (select.value === '2024'){
            fetch(`https://api.kinopoisk.dev/v1.4/movie?year=${select.value}&genres.name=${genders}`, options)
            .then(respons => respons.json())
            .then(answer => {
                // console.log(answer);
                section__main.innerHTML = ''
                for(let i=1; i<answer.docs.length; i++){
                    // console.log(answer.docs[i].poster.url);
                    let div = document.createElement('div')
                    let img = document.createElement("img");
                    let name = document.createElement("p");
                    let countries = document.createElement("p");
                    let rating = document.createElement("p");
                    let imdb = document.createElement("p");
                    let add_btn = document.createElement("button");
                    let year = document.createElement("p");
                    add_btn.classList.add('add_btn')
                    img.classList.add('images')
                    name.classList.add('name')
                    year.innerHTML = answer.docs[i].year
                    name.innerHTML = answer.docs[i].name
                    img.src = answer.docs[i].poster.url
                    // img.textContent = `Название:${answer.docs[i].name}`
                    countries.innerHTML = answer.docs[i].countries[0].name
                    // console.log(answer.docs[i].countries[0]);
                    rating.innerHTML = answer.docs[i].rating.kp
                    imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
                    imdb.style.color = 'blue'
                    
                    watch_count = 0

                    if (answer.docs[i].poster.url !== null){
                        
                        section__main.append(img)
                        // main__name.append(name)
                        img.insertAdjacentElement('afterend', name)
                        
                        name.insertAdjacentElement('beforeend', countries)
                        name.insertAdjacentElement('beforeend', imdb)
                        name.insertAdjacentElement('beforeend', add_btn)
                        name.insertAdjacentElement('afterbegin', rating)
                        name.insertAdjacentElement('afterbegin', year)
                    }
                    add_btn.addEventListener('click', function(event){
                        if (event.type === 'click'){
                            watch_count +=1
                            add_btn.classList.toggle('add_btn_on')
                            watch.style.color = 'red'
                            watch.style.display = 'flex'
                            
                            let temp = document.createElement('p')
                            temp.innerHTML = watch_count
                        
                            temp1.innerHTML = temp.innerHTML
                            // console.log(watch_count);
                        }
                        else{
                            watch_count = 0
                        }
                    })
                    
                }
                
            
                

            })
        }    

    }
        
input__btn.addEventListener('click', ()=>{
    fetch(`https://api.kinopoisk.dev/v1.4/movie/search?page=1&limit=10&query=${input.value}`, options)
        
        .then(respons => respons.json())
        .then(answer => {
            console.log(answer);
            console.log(input.value);
            console.log(answer.docs[1].names[0].name);
            
            for(let i=0; i<2; i++){
                console.log(answer.docs[i].poster.url);
                let div = document.createElement('div')
                let img = document.createElement("img");
                let name = document.createElement("p");
                let countries = document.createElement("p");
                let rating = document.createElement("p");
                let imdb = document.createElement("p");
                let add_btn = document.createElement("button");
                let year = document.createElement("p");
                
                add_btn.classList.add('add_btn')
                img.classList.add('images')
                name.classList.add('name')
                year.innerHTML = answer.docs[i].year
                name.innerHTML = answer.docs[i].name
                img.src = answer.docs[i].poster.url
                // img.textContent = `Название:${answer.docs[i].name}`
                countries.innerHTML = answer.docs[i].countries[0].name
                // console.log(answer.docs[i].countries[0]);
                rating.innerHTML = answer.docs[i].rating.kp
                imdb.innerHTML = `IMDB: ${answer.docs[i].rating.imdb}`
                imdb.style.color = 'blue'
                
                watch_count = 0

                if (answer.docs[i].poster.url !== null && answer.docs[0].name === input.value) {
                    // console.log(img);
                    section__main.innerHTML = ''
                    section__main.append(img)
                    // main__name.append(name)
                    img.insertAdjacentElement('afterend', name)
                    
                    name.insertAdjacentElement('beforeend', countries)
                    name.insertAdjacentElement('beforeend', imdb)
                    name.insertAdjacentElement('beforeend', add_btn)
                    name.insertAdjacentElement('afterbegin', rating)
                    name.insertAdjacentElement('afterbegin', year)
                }
                
                
            }
            
           
            

        })
            

})