import './Option.scss';

const Option = {
    create(title) {
        const option = document.createElement("li")

        const optionsInput = document.createElement("input")
        optionsInput.classList.add("param__checkbox")
        optionsInput.setAttribute('type', "checkbox")
        optionsInput.setAttribute('id', "checkbox")

        const optionsMark = document.createElement("div")
        optionsMark.classList.add("param__checkbox-mark")

        const optionsTitle = document.createElement("label")
        optionsTitle.classList.add("param__checkbox-label")
        optionsTitle.setAttribute('for', "checkbox")
        optionsTitle.innerHTML = title


        option.append(optionsInput)
        option.append(optionsMark)
        option.append(optionsTitle)

        return option
    }
}

export default Option