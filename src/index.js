import './style/reset.css';
import './style/fonts.css';
import './style/style.scss';

const params = document.querySelectorAll('.param__title ')

document.addEventListener('click', function(event){
    let activeElement = document.querySelector('.param_active') 
    let paramOptions = document.querySelector('.param__options-wrapper_visible')
    console.log('asdsad',activeElement)
    if(activeElement && !activeElement?.contains(event.target)){
        activeElement?.classList.remove('param_active')
        paramOptions?.classList.remove('param__options-wrapper_visible')
    }
})

params.forEach((item) => {
        item.addEventListener('click', function(){
        let activeElement = document.querySelector('.param_active') 
        activeElement?.classList.remove('param_active')
        let paramOptions = document.querySelector('.param__options-wrapper_visible')
        paramOptions?.classList.remove('param__options-wrapper_visible')
        
        item.parentElement.querySelector('.param__options-wrapper').classList.toggle('param__options-wrapper_visible')
        item.parentElement.classList.toggle('param_active')
    })
})


