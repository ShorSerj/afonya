import './style/reset.css';
import './style/fonts.css';
import './style/style.scss';

const params = document.querySelectorAll('.param__title ')

document.addEventListener('click', function(event){
    let activeElement = document.querySelector('.param_active') 
    let paramOptions = document.querySelector('.param__options-wrapper_visible')

    if(activeElement && !activeElement?.contains(event.target)){
        activeElement?.classList.remove('param_active')
        paramOptions?.classList.remove('param__options-wrapper_visible')
    }
})

params.forEach((item) => {
    item.addEventListener('click', function(e){
        let activeElement = document.querySelector('.param_active') 
        activeElement?.classList.remove('param_active')
        let paramOptions = document.querySelector('.param__options-wrapper_visible')

        paramOptions?.classList.remove('param__options-wrapper_visible')
        activeElement?.classList.remove('param_active')

        if(!activeElement?.contains(e.target)){ 
            item.parentElement.querySelector('.param__options-wrapper').classList.add('param__options-wrapper_visible')
            item.parentElement.classList.add('param_active')
        }     
    })
})


