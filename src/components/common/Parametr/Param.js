import Option from './Option/Option.js'
import './Param.scss';

const Param = {
    create(title, options) {
        const paramElement = document.createElement('li')
        paramElement.classList.add('param')

        const paramTitle = document.createElement("div")
        paramTitle.classList.add("param__title")

        const paramTitleText = document.createElement("div")
        paramTitleText.classList.add("param__title_text")
        paramTitleText.innerHTML = title

        const paramIcon = document.createElement("div")
        paramIcon.classList.add("param__icon")
        paramIcon.innerHTML = '&times;'

        const paramOptionsWrapper = document.createElement("div")
        paramOptionsWrapper.classList.add("param__options-wrapper")

        const paramOptions = document.createElement("ul")
        paramOptions.classList.add("param__options")
        options.forEach((item) => {
            paramOptions.append(Option.create(item))
        })
    
        const paramButton = document.createElement("div")
        paramButton.classList.add("param__accept")

        const buttonsText = document.createElement("p")
        buttonsText.innerHTML = 'Применить'

        paramTitle.append(paramTitleText)
        paramTitle.append(paramIcon)

        paramOptionsWrapper.append(paramOptions)
        paramOptionsWrapper.append(paramButton)

        paramButton.append(buttonsText)
        
        paramElement.append(paramTitle)
        paramElement.append(paramOptionsWrapper)
        
        
        paramTitle.addEventListener('click', function(e){
            // document.querySelector('.param__options-wrapper_visible')?.classList.remove('param__options-wrapper_visible')
            // document.querySelector('.param__icon_visible')?.classList.remove('param__icon_visible') 
            console.log('2')
            paramOptionsWrapper.classList.toggle('param__options-wrapper_visible')
            paramIcon.classList.toggle('param__icon_visible')

            
            // visibleIcon?
            
            // let activeElement = document.querySelector('.param_active') 
            // activeElement?.classList.remove('param_active')
            // let paramOptions = document.querySelector('.param__options-wrapper_visible')
    
            // paramOptions?.classList.remove('param__options-wrapper_visible')
            // activeElement?.classList.remove('param_active')
    
            // if(!activeElement?.contains(e.target)){ 
                // paramElement.querySelector('.param__options-wrapper').classList.add('param__options-wrapper_visible')
                // paramElement.classList.add('param_active')
            // }     
        })

        return paramElement
    }
}

export default Param