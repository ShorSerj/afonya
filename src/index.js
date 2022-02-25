import './style/reset.css';
import './style/fonts.css';
import './style/style.scss';
import Param from './components/common/Parametr/Param.js'
import {getParams} from './components/common/getParams/getParams.js'
import Slider from './components/common/Slider/Slider.js';

const filter = document.querySelector('.filter__title')
const filterArrow = document.querySelector('.filter__arrow')
const filterWrapper = document.querySelector('.filter-wrapper')

const toggleFilter = document.querySelector('.filter__more')
toggleFilter.innerHTML = 'Показать больше параметров (12)'
const maxFilter = document.querySelector('.filter__max-filter')



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

filter.addEventListener('click', function(){
    filterArrow.classList.toggle('filter__arrow_up')
    filterWrapper.classList.toggle('filter-wrapper')
})

document.addEventListener('click', function(event){
    let activeElements = document.querySelectorAll('.param__options-wrapper_visible')
    activeElements?.forEach(item => {
        if(item.closest('.param') !== event.target.closest('.param')){
            item.classList.remove('param__options-wrapper_visible')
            item.closest('.param').querySelector('.param__icon_visible').classList.remove('param__icon_visible')
        }

    })
})

toggleFilter.addEventListener('click', function(){
    maxFilter.classList.toggle('filter__max-filter_visible')
    toggleFilter.classList.toggle('filter__more-max')

    if(toggleFilter.className == 'filter__more filter__more-max'){
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
