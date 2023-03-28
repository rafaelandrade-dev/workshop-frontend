const email = document.querySelector('#inputEmail')
const password = document.querySelector('#inputPassword')

function validarFormulario(event){
    event.preventDefault()

    if(email.value === '' || password.value === '') { 
        alert('Preencha todos os campos!')
        return
    } else {
        console.log({
            email: email.value,
            password: password.value
        })
        email.value = ''
        password.value = ''
    }
}
