const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if(currentActive > circles.length) {
        currentActive = circles.length
    }
    update()
})


// by checking if currentActive is < 1, it ensures the button won't go into negative, the currentActive is then set to 1
prev.addEventListener('click', () => {
    currentActive--

    if(currentActive < 1) {
        currentActive = 1
    }
    update()
})

function update() {
    circles.forEach((circle,index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    });

    // this part moves the progress bar across the screen as the next/prev is clicked
    const actives = document.querySelectorAll(".active")
    progress.style.width = (actives.length -1) / (circles.length - 1) * 100 + "%"

    // controls whether the button is active or not
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
}

