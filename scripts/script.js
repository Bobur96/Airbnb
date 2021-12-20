//   -------------- search ----------------

const none = document.querySelector('.header .content')
const divs = document.querySelectorAll('.center .container div');
const search = document.querySelector('.header .search-btn');
const word = document.querySelector('.header .center h5');

divs.forEach(div => {
    div.onclick = () => {
        word.style.display = 'block';
        search.style.width = '54%';
    }
})

//   -------------- CALENDAR ----------------

const div2 = document.querySelector('.d2')
const div3 = document.querySelector('.d3')
const calendar = document.querySelector('.calendar')

divs.forEach(div => {
    if (div.className === 'd2' || div.className === 'd3') {
        div.onclick = () => {
            document.querySelector('.calendar').classList.toggle('looks')
            child.classList = 'adults-page'
            word.style.display = 'block';
            search.style.width = '54%';
            gps.style.display = 'none'
        }
    }
})

const adult = document.querySelector('.search-div')

adult.onclick = () => {
    document.querySelector('.adults-page').classList.toggle('show')
    calendar.classList = 'calendar'
    word.style.display = 'block';
    search.style.width = '54%';
    gps.style.display = 'none'
}

//   -------------- display_none ----------------

const child = document.querySelector('.adults-page')

none.onclick = () => {
    calendar.classList = 'calendar'
    child.classList = 'adults-page'
    word.style.display = 'none';
    search.style.width = '46px';
    gps.style.display = 'none'
}

//   -------------- display_none ----------------

const gps = document.querySelector('.gps-page')
const div1 = document.querySelector('.d1')
div1.onclick = () => {
    gps.style.display = 'flex'
    calendar.classList = 'calendar'
    child.classList = 'adults-page'
}

//   ------------- incrament_decrament ---------------

// const inc = document.querySelector('.incrament')
// const dec = document.querySelector('.decrament')
// const input = document.querySelector('.adults-page input')

// let counter = 0
// inc.onclick = () => {
//     dec.style.cursor = 'pointer'
//     dec.style.opacity = '1'

//     if (counter < 16) {
//         counter++;     
//         input.value = counter;
//     }
//     if(counter === 16){
//         inc.style.opacity = '0.4'
//         inc.style.cursor = 'no-drop'
//     }

// }
// dec.onclick = () => {
//     if (counter > 0) {
//         inc.style.opacity = '1'
//         inc.style.cursor = 'pointer'
//         counter--;
//         input.value = counter;
//     }
//     if (counter == 0) {
//         dec.style.opacity = '0.4'
//         dec.style.cursor = 'no-drop'
//     }
// }

//   ------------- +++++++------+++++++ ---------------

const inc = document.querySelectorAll('.incrament')
const dec = document.querySelectorAll('.decrament')
const input = document.querySelectorAll('.adults-page input')

const adult_div = document.querySelector('.center .search-div p')

let id = 0
let counter = 0
inc.forEach(item => {
    id++
    item.dataset.id = id
    item.onclick = () => {
        let t = 0
        input.forEach(key =>{
            adult_div.textContent = input[0].value + ' guests'
            t++
            key.dataset.id = t
            if(item.dataset.id === key.dataset.id){
                counter = key.value
                if (counter < 16) {
                    item.style.cursor = 'pointer'
                    item.style.opacity = '1'
                    counter++;
                    dec[t-1].style.cursor = 'pointer'
                    dec[t-1].style.opacity = '1'
                    key.value = counter;
                }
                if (counter === 16) {
                    item.style.opacity = '0.3'
                    item.style.cursor = 'no-drop'
                }
            }
        })
    }
})

let k = 0
dec.forEach(item => {
    k++
    item.dataset.id = k
    item.onclick = () => {
        let a = 0
        input.forEach(key => {
            a++
            key.dataset.id = a
            if(item.dataset.id === key.dataset.id){
                counter = key.value
                if (counter > 0) {                    
                    item.style.cursor = 'pointer'
                    item.style.opacity = '1'
                    counter--;
                    inc[a-1].style.cursor = 'pointer'
                    inc[a-1].style.opacity = '1'
                    key.value = counter;
                    adult_div.textContent = input[0].value + ' guests'
                }
                if (counter === 0) {
                    // console.log(inc[a-1].dataset.id)
                    item.style.opacity = '0.3'
                    item.style.cursor = 'no-drop'
                    if(input[0].value == 0){
                        adult_div.textContent = 'Add guests'
                    }
                }
            }

        })
    }
})

//   ------------- clear_input and onclick_input ---------------

// const root = document.querySelector('.root')
const clear = document.querySelector('.full-search .i');
const full_input = document.querySelector('.full-search .input-page input');
const cancel = document.querySelector('.full-search .right')

full_input.onclick = ()=> {
    cancel.style.display = 'block'
    clear.style.display = 'block' 
    // root.style.opacity = '0.5'
}

clear.onclick = ()=> {
    full_input.value = ''
}

cancel.onclick = ()=> {
    cancel.style.display = 'none'
    clear.style.display = 'none'
    full_input.value = ''
    // root.style.opacity = '1'
}

//   ------------- banner ---------------

const banner = document.querySelectorAll('.banner')
banner.forEach(ban =>{
    ban.onclick = ()=> {
        asosiySahifa(wrapper, asosiySahifaFuncs)
        
    }
})
