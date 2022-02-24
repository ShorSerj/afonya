import './style/reset.css';
import './style/fonts.css';
import './style/style.scss';
import Param from './components/common/Parametr/Param.js'
import {GetParams} from './components/common/getParams/GetParams.js'
import Slider from './components/common/Slider/Slider.js';

const params = document.querySelectorAll('.param__title')
const maxFilter = document.querySelector('.filter__more')

let getParamsMin = new Promise(function (resolve) {
    resolve(GetParams.getParams('data-min'))
})
getParamsMin.then(function (result) {
    const containerParams = document.querySelector('.filter__min-filter')
    result.params.forEach((element) => {
        const param = Param.create(element.title, element.options)
        containerParams.append(param)    
    })
})

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

maxFilter.addEventListener('click', function(){
    let getParamsMax = new Promise(function (resolve) {
        resolve(GetParams.getParams('data-max'))
    })
    getParamsMax.then(function (result) {
        const containerParams = document.querySelector('.filter__max-filter')
        result.params.forEach((element) => {
            if(element.options?.min_value){
                const slider = Slider.create(element.title, element.options)
                containerParams.append(slider)
            }else{
                const param = Param.create(element.title, element.options)
                containerParams.append(param)
            }    
        })

    })
})



