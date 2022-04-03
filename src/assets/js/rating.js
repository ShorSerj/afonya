const ratings = document.querySelectorAll('.fed-form__rating')

let currentValue = 0
const valueGradation = ['Неудовлетворительно', 'Удовлетворительно', 'Средне', 'Хорошо', 'Отлично']

if(ratings.length > 0){ 
    initRatings()
}

function initRatings(){
    let ratingActive, ratingValue

    for (let index = 0; index < ratings.length; index++){
        const rating = ratings[index]
        initRating(rating)
    }
    
    function initRating(rating) {
        initRatingVars(rating)
        
        if(rating.classList.contains('fed-form__rating_set')){
            setRatingActiveWidth(currentValue)
            setRating(rating)
        }else{
            const ratingItems = rating.querySelectorAll('.rating__item')
            for(let index = 0; index < ratingItems.length; index++){
                if(ratingItems[index].getAttribute('checked') != null){
                    setRatingActiveWidth(index+1) 
                }
            }
        }
    }

    function initRatingVars(rating) {
        ratingActive = rating.querySelector('.rating__active')
        ratingValue = rating.querySelector('.rating__value')
    }

    function setRatingActiveWidth(index) {
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
            ratingItem.addEventListener("mouseleave", function (e){
                setRatingActiveWidth(currentValue)
            })
            ratingItem.addEventListener("click", function (e){
                initRatingVars(rating)
                currentValue = index + 1
                const valueText = rating.querySelector('.rating__value')
                valueText.innerHTML = valueGradation[index]
                setRatingActiveWidth(currentValue)
            })
        }
    }
}