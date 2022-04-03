const certificates = document.querySelectorAll('.certificates__item')
const popup = document.querySelector('.popup')
const popupContent = document.querySelector('.popup__content')

certificates.forEach(item => {
    item.addEventListener('click', function(e) {
        const child = popupContent.querySelector('img')
        if(child){
            popupContent.removeChild(child)
        }
        popup.classList.add('popup_active')
        let content = item.querySelector('img').cloneNode(true)
        popupContent.append(content)
    })
})

popup.addEventListener('click', function(e){
    if(!e.target.closest('.popup__content')){
        popup.classList.remove('popup_active')
    }
})