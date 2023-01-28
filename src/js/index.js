console.log("Hello World!")

// HAMBURGER MENU ->
const hamburger = document.getElementById('hamburger_icons')

hamburger.addEventListener("click", event => {
    event.preventDefaults
    alert('you clicked the hamburger!')
    // SLIDE OUT MENU ->
})

hamburger.addEventListener("mouseover", event => {
    event.preventDefault
    hamburger.style.color = "white"
})

// IMAGE SLIDESHOW ->