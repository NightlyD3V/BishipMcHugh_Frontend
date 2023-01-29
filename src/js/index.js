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
$(document).ready(() => {
    $('#image_slider-container').slick({
        autoplay: true,
        lazyLoad: true,
    })
})

// let slider_images = document.querySelectorAll(".image_slider-images")
// let imageArr = Array.from(slider_images)
// console.log(imageArr)
// function nextImage() {
//     for(let index=0; index < imageArr.length; index++) {
//         console.log(index)
//         imageArr[index].style = 'display: block;'
//         setTimeout(() => {
//             imageArr[index.style = 'display: none;']
//             requestAnimationFrame(nextImage)
//         }, 3000)
//     }
// }
// window.requestAnimationFrame(nextImage)