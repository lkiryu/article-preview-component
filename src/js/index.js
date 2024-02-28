const shareButton = document.querySelector(".share-button")
const share = document.querySelector(".share")

shareButton.addEventListener("click", function(){
    share.classList.toggle("none")
    shareButton.classList.toggle("active")
})