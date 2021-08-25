"use strict"
const lamp = document.getElementById('lamp');

document.getElementById('on').addEventListener('click', () => lampActions.turnOn());
document.getElementById('off').addEventListener('click', () => lampActions.turnOff());
lamp.addEventListener('dblclick', () => lampActions.break())
lamp.addEventListener('mouseenter', () => !lamp.src.includes("quebrada") && lampActions.turnOn())
lamp.addEventListener('mouseleave', () => !lamp.src.includes("quebrada") && lampActions.turnOff())

const lampActions = {
    lamp: document.getElementById('lamp'),
    turnOn: () => {
        lampActions.lamp.src = "./public/images/ligada.jpg"
        disableButtons(true, false)
    },
    turnOff: () => {
        lampActions.lamp.src = "./public/images/desligada.jpg"
        disableButtons(false, true)
    },
    break: () => {
        lampActions.lamp.src = "./public/images/quebrada.jpg";
        disableButtons(true, true)
    }
}

function disableButtons(onState, offState) {
    document.getElementById('on').disabled = onState;
    document.getElementById('off').disabled = offState;
}