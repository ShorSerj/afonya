const rating = document.querySelector('.rating')

initRatingVars(rating)
setRatingActiveWidth()
setRating(rating)

function initRatingVars(rating) {
    ratingActive = rating.querySelector('.rating__active')
    ratingValue = rating.querySelector('.rating__value')
}

function setRatingActiveWidth(rating) {
    const ratingActiveWidth = index / 0.05
    ratingActive.style.width = `${ratingActiveWidth}%`
}
function setRating(rating) {
    const ratingItems = rating.querySelectorAll('.rating__item')
    for(let index = 0; index < ratingItems.length; index++){
        const ratingItem = ratingItems[index]
        ratingItem.addEventListener("mouseenter", function (e){
            initRatingVars(rating)
            setRatingActiveWidth(ratingItem.value)
        })
    }
}