import Option from './Option/Option.js'
import './Param.scss';

const Param = {
    create(title, options) {
        const paramElement = document.createElement('li')
        paramElement.classList.add('param')

        const paramTitle = document.createElement("div")
        paramTitle.classList.add("param__title")

        const paramTitleText = document.createElement("div")
        paramTitleText.classList.add("param__title-text")
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
            paramOptionsWrapper.classList.toggle('param__options-wrapper_visible')
            paramIcon.classList.toggle('param__icon_visible')   
        })
        return paramElement
    }
}
export default Param