const prev = document.getElementById("left")
const next = document.getElementById("right")
const images = document.querySelector(".image-container")
const img = document.querySelectorAll("#images img")


let idx = 0 

let interval = setInterval(run, 2000)

function run() {
    idx++
    changeImage()
}

function changeImage() {
    if(idx > img.length - 1) {
        idx = 0
    } else if(idx < 0) {
        idx = img.length - 1
    }

    images.style.transform = `translateX(${-idx * 500}px)`
}

function resetInterval() {
    clearInterval(interval)
    interval = setInterval(run, 2000)
}


next.addEventListener("click", ()=> {
    idx ++
    changeImage()
    resetInterval()
})

prev.addEventListener("click", ()=> {
    idx --
    changeImage()
    resetInterval()
})