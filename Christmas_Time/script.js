'use strict'
const bg = document.querySelector(".bg")
const btn = document.querySelector(".btn")

let interval = setInterval(blurring, 15)
let load = 0

function blurring() {
        load++
    
        if(load > 99) {
            clearInterval(interval)
        }

    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
} 

btn.addEventListener("click", )