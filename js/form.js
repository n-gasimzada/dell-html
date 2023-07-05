function validation(form) {

    function removeTextError (textInput) {
        const textParent = textInput.parentNode;

        if(textParent.classList.contains('error-label')) {
            textParent.querySelector('.error-label').remove()
            textParent.classList.remove('label')
        }
    }

    function removeNumError (numInput) {
        const numParent = numInput.parentNode;

        if(numParent.classList.contains('error-label')) {
            numParent.querySelector('.error-label').remove()
        }
    }

    function createTextError(textInput, text) {
        const textParent = textInput.parentNode;
        const errorText = document.createElement('label')
        errorText.classList.add('error-label')
        errorText.textContent = text
        textParent.append(errorText)
    }

    function createNumError (numInput, text) {
        const numParent = numInput.parentNode;
        const errorNum = document.createElement('label')
        errorNum.classList.add('error-label')
        errorNum.textContent = text
        numParent.append(errorNum)
    }


    let result = true;
    const textInput = form.querySelector('.text-input')
    const numInput = form.querySelector('.num-input')

    removeTextError(textInput)
    removeNumError(numInput)
    if (textInput.value === '') {
        createTextError(textInput, "Поле не заполнено!")
        result = false;
    }

    if (numInput.value != typeof(number)) {
        createNumError(numInput, "Поле не заполнено!")
        result = false;
    }
}



document.getElementById('add-form').addEventListener('submit', function(event) {
    event.preventDefault()

    alert('Форма отправлена успешно!')
     
    /* if(validation(this) == true) {
        alert('Форма отправлена успешно!')
    } */
})