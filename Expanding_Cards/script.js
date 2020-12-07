// Puts the pics with a panel class into an array. ForEach iterates over these panels, calls the removeActiveClasses function
const panels = document.querySelectorAll('.panel')
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}