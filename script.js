let imagi = ['1577531889179623112.jpg', 'kot-dingus-mem-360x270.jpg', 'plachuschiy_kot.jpg']
let slid = document.querySelector('#slid')
let indicators
let indicatarList = document.querySelector('#indicatarList')
for (let i = 0; i < imagi.length; i++) {
    let indicatora = document.createElement('li')
    indicatora.classList.add('indicator');
    indicatarList.appendChild(indicatora)
}

indicators = document.querySelectorAll('.indicator')

let i = 0
slid.src = `img/${imagi[0]}`;
indicators[0].style.borderColor = 'red';

let left = document.querySelector('#left')

let right = document.querySelector('#right')



left.addEventListener('click', (event) => {
    event.preventDefault()
    prev()
})
right.addEventListener('click', (event) => {
    event.preventDefault()
    next()
})
function prev() {
    i--;
    if (i < 0) {
        i = imagi.length - 1;
    }
    slid.src = `img/${imagi[i]}`
    for (let i = 0; i < imagi.length; i++) {
        indicators[i].style.borderColor = 'transparent'
    }
    indicators[i].style.borderColor = 'red';
}
function next() {
    i++
    if (i > imagi.length - 1) {
        i = 0;
    }
    slid.src = `img/${imagi[i]}`
    for (let i = 0; i < imagi.length; i++) {
        indicators[i].style.borderColor = 'transparent'

    }
    indicators[i].style.borderColor = 'red'
}



