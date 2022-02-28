let hexa = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
let randomColor = '#';

function randomColor1() {
    let i = 0;
    for (; i < 6; i ++) {
        randomColor += hexa[Math.floor(Math.random() * 16)]
    }
    const div = document.querySelector('#color1')
        .style.background = randomColor
    const p = document.querySelector('#hexa1')
        .innerHTML = randomColor
    randomColor = '#';
}

function randomColor2() {
    let i = 0;
    for (; i < 6; i ++) {
        randomColor += hexa[Math.floor(Math.random() * 16)]
    }
    const div = document.querySelector('#color2')
        .style.background = randomColor
    const p = document.querySelector('#hexa2')
        .innerHTML = randomColor
    randomColor = '#';
}

function randomColor3() {
    let i = 0;
    for (; i < 6; i ++) {
        randomColor += hexa[Math.floor(Math.random() * 16)]
    }
    const div = document.querySelector('#color3')
        .style.background = randomColor
    const p = document.querySelector('#hexa3')
        .innerHTML = randomColor
    randomColor = '#';
}

function writeText1() {
    const p1 = document.querySelector('#hexa1').textContent
    navigator.clipboard.writeText(p1)
    alert('Cor copiada com sucesso ' + p1)
}
function writeText2() {
    const p2 = document.querySelector('#hexa2').textContent
    navigator.clipboard.writeText(p2)
    alert('Cor copiada com sucesso ' + p2)
}
function writeText3() {
    const p3 = document.querySelector('#hexa3').textContent
    navigator.clipboard.writeText(p3)
    alert('Cor copiada com sucesso ' + p3)
}

randomColor1();
randomColor2();
randomColor3();