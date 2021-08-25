"use strict"
const lamp = document.getElementById('lamp');

document.getElementById('on').addEventListener('click', () => lampActions.turnOn());
document.getElementById('off').addEventListener('click', () => lampActions.turnOff());
document.getElementById('blink').addEventListener('click', () => lampActions.turnBlink());
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
    turnBlink: () => {
        if(document.getElementById('blink').textContent == "Piscar") {
            document.getElementById('blink').textContent = "Parar"
            const blink = setInterval(() => {
                document.getElementById('blink').textContent == "Piscar" && clearInterval(blink)
                lampActions.lamp.src.includes("desligada") ? lampActions.turnOn() : lampActions.turnOff()
            }, 200)
            blink;
        } else document.getElementById('blink').textContent = "Piscar"
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