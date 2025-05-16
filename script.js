let imagi = ['img/48b04d194725c6ffbd679d04f864f97f.jpg', 'img/unnamed.jpg', 'img/i.webp']
let slid = document.querySelectorAll('#slid')
let indicators = document.querySelectorAll('#indicatora')
let indicatarList = document.querySelectorAll('#indicatarList')
for (let i = 0; i < imagi.length; i++) {
    let indicatora = document.createElement('li')
    indicatarList = document.appendChild('#indicatora')
}
let i = 0
slid.src = `img/${imagi[0]}`;
indicators[0].style.borderColor = 'red';



let left = querySelector('left')

let right = querySelector('right')

left.addEventListener('click', (prev) => {
    e.preventDefault()
    function prev() {
        if (i < 0) {
            i = imagi.length - 1;
        }
    }
    let i = 0
    slid.src = `img/${imagi[i]}`
    for (let i = 0; i < imagi.length; i++) {
        indicators[i].style.borderColor = 'transparent'

    }
    indicators[i].style.borderColor = 'red';
    if (i > images.length - 1) {
        i = 0
    }
})




