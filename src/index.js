import './style/reset.css';
import './style/fonts.css';
import './style/style.scss';
import Param from './components/common/Parametr/Param.js'
import {getParams} from './components/common/getParams/getParams.js'
import Slider from './components/common/Slider/Slider.js';

const filter = document.querySelector('.filter__title')
const filterArrow = document.querySelector('.filter__arrow')
const filterWrapper = document.querySelector('.filter-wrapper')
const params = document.querySelectorAll('.param__title')
const toggleFilter = document.querySelector('.filter__more')
const maxFilter = document.querySelector('.filter__max-filter')
toggleFilter.innerHTML = 'Показать больше параметров (12)'


let getParamsMin = new Promise(function (resolve) {
    resolve(getParams.getParams('data-min'))
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
    let visibleIcon = document.querySelector('.param__icon_visible') 

    if(activeElement && !activeElement?.contains(event.target)){
        activeElement?.classList.remove('param_active')
        paramOptions?.classList.remove('param__options-wrapper_visible')
        visibleIcon?.classList.remove('param__icon_visible')
    }
})

filter.addEventListener('click', function(){
    filterArrow.classList.toggle('filter__arrow_up')
    filterWrapper.classList.toggle('filter-wrapper')
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

toggleFilter.addEventListener('click', function(){
    maxFilter.classList.toggle('filter__max-filter_visible')
    toggleFilter.classList.toggle('more__max')
    if(toggleFilter.className == 'filter__more more__max'){
        toggleFilter.innerHTML = 'Показать меньше параметров (12)'
    }else{
        toggleFilter.innerHTML = 'Показать больше параметров (12)'
    }
    if(maxFilter.children.length < 1) {
        let getParamsMax = new Promise(function (resolve) {
            resolve(getParams.getParams('data-max'))
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
    }
})



