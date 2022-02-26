import './Slider.scss';

const Slider = {
    create(title,options) {

        const paramSlider = document.createElement('li')
        paramSlider.classList.add('param')

        const paramTitle = document.createElement("div")
        paramTitle.classList.add("param__title")

        const paramTitleText = document.createElement("div")
        paramTitleText.classList.add("param__title-text")
        paramTitleText.innerHTML = title
        
        const sliderWrapper = document.createElement("div")
        sliderWrapper.classList.add("param__slider-wrapper")

        const sliderTrack = document.createElement("div")
        sliderTrack.classList.add("param__slider-track")
        
        const sliderOne = document.createElement("input")
        sliderOne.setAttribute('type', "range")
        sliderOne.setAttribute('min', options.min_value)
        sliderOne.setAttribute('max', options.max_value)
        sliderOne.setAttribute("value", options.min_value)
        sliderOne.oninput = function() {slideOne()}

        const sliderTwo = document.createElement("input")
        sliderTwo.setAttribute('type', "range")
        sliderTwo.setAttribute('min', options.min_value)
        sliderTwo.setAttribute('max', options.max_value)
        sliderTwo.setAttribute("value", options.max_value)
        sliderTwo.oninput = function() {slideTwo()}

        const sliderValues = document.createElement("div")
        sliderValues.classList.add("param__slider-values")

        const valueFirst = document.createElement("input")
        valueFirst.classList.add("param__slider-value")
        valueFirst.oninput = function() {slideOne(valueFirst.value)}
        valueFirst.setAttribute("placeholder", options.min_value)

        const valueSecond = document.createElement("input")
        valueSecond.classList.add("param__slider-value")
        valueSecond.oninput = function() {slideTwo(valueSecond.value)}
        valueSecond.setAttribute("placeholder", options.max_value)

        sliderValues.append(valueFirst)
        sliderValues.append(valueSecond)

        paramTitle.append(paramTitleText)
        paramSlider.append(paramTitle)
        
        sliderWrapper.append(sliderTrack)
        sliderWrapper.append(sliderOne)
        sliderWrapper.append(sliderTwo)

        paramSlider.append(sliderWrapper)
        paramSlider.append(sliderValues)

        let minGap = 0
        let sliderMaxValue = sliderOne.max

        function slideOne(value, mode=null){
            if(value){
                if(value < options.min_value){
                    valueFirst.value = options.min_value
                }else{
                    sliderOne.value = value
                }   
            }

            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
                sliderOne.value = parseInt(sliderTwo.value) - minGap;
            }
            sliderMaxValue = sliderOne.max
            
            if(!mode && isNaN(value)){
                valueFirst.value = sliderOne.value
            } else if(value == ''){
                valueFirst.value = null
            } 
            fillColor();
        }

        function slideTwo(value, mode=null){
            if(value){ 
                if(value < valueFirst.value || value > parseInt(options.max_value)){
                    valueSecond.value = options.max_value
                    sliderTwo.value = options.max_value
                }else{
                    valueSecond.value = value
                    sliderTwo.value = value
                }   
            }

            if(parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap){
                sliderTwo.value = parseInt(sliderOne.value) + minGap;
            }

            if(!mode && isNaN(value)){
                valueSecond.value = sliderTwo.value
            } else if(value == ''){
                valueSecond.value = null
                sliderTwo.value = options.max_value
            }

            sliderMaxValue = sliderOne.max
            fillColor();
        }

        function fillColor(){
            let percent1 = (sliderOne.value / sliderMaxValue) * 100;
            let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
            sliderTrack.style.background = `linear-gradient(to right, #B2B2B2 ${percent1}% , #0F74D1 ${percent1}% , #0F74D1 ${percent2}%, #B2B2B2 ${percent2}%)`;
        }

        slideOne(null, true)
        slideTwo(null, true)
            
        return paramSlider
    }
}

export default Slider

