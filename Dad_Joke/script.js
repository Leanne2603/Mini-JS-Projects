const background1 = document.querySelector(".background")
const loadPercentage = document.querySelector(".loading-percentage")
const button = document.querySelector("button")
const mc = document.querySelector(".mc")
const jokeBg = document.querySelector(".joke-background")
const loader = document.querySelector(".loader")

jokeBg.classList.add("hidden")

let load = 0
let interval = setInterval(blurImage, 30)

function blurImage() {
    load++

    if (load > 99) {
        clearInterval(interval)
    }

    loadPercentage.innerText = `${load}%`
    loadPercentage.style.opacity = scale(load, 0, 100, 1, 0)
    background1.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    
    
}
const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
}
    
setTimeout(() => {
    button.classList.remove("hidden")
    mc.classList.add("hidden")
}, 4000)

button.addEventListener("click", () => {
    button.classList.add("hidden")
    background1.classList.add("hidden")
    jokeBg.classList.remove("hidden")
    const number = prompt("Enter a number between 10 - 100:")
    checkNumber(number)

})

function checkNumber(number) {
    if (number >=10 && number <= 100) {
        dadJokes(number)
    } else {
        alert("Uh oh! Your number was not between 10 and 100. Try Again...")
        const newNumber = prompt("Enter a number between 10 - 100:")
        checkNumber(newNumber)
    }
}

function getJoke() {
    return new Promise((resolve, reject) => {
        $.getJSON("https://icanhazdadjoke.com", result => {
            if(result && result.joke)  resolve(result.joke)
            reject("Error getting joke")
        })
    })
}

function dadJokes(number) {
    loader.classList.remove("hidden")
        let jokesArray = []

    for (let i = 0; i < number; i++) {
        jokesArray.push(getJoke())
    }

    Promise.all(jokesArray)
        .then(jokes => {
            const addJoke = document.getElementById("djokes")
            addJoke.innerHTML = ""
            for (let joke of jokes) {
                let p = document.createElement("p")
                p.innerHTML = joke
                addJoke.appendChild(p)
            }
            loader.classList.add("hidden")
        })
    }
    









