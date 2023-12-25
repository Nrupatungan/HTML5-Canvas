const pencilInput = document.querySelector('#pencil')
const inputVal = document.querySelector('#pencil + p')
const canvas = document.querySelector('canvas')
const clr_btn = document.querySelector('.clrBtn')
const ctx = canvas.getContext('2d')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

ctx.strokeStyle = "#BASA55"
ctx.lineJoin = 'round'
ctx.lineCap = 'round'

let hue = 0;
let lastX = 0;
let lastY = 0;
let isDrawing = false;

function draw(e){
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];

    hue++;
    if(hue >= 360){
        hue = 0;
    }
}

window.addEventListener('load', () => {
    ctx.lineWidth = pencilInput.value = inputVal.innerText = 1;
})

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mousedown', e => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
})

pencilInput.addEventListener('mousemove', e => {
    ctx.lineWidth = inputVal.innerText = e.target.value;
})

pencilInput.addEventListener('change', e => {
    ctx.lineWidth = inputVal.innerText = e.target.value;
})

clr_btn.addEventListener('click', e => {
    e.preventDefault();
    ctx.clearRect(0, 0, width, height);
})