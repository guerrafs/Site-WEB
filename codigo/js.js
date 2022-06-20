'use strict'
const form = document.getElementById('form1')
const usuario = document.getElementById('usuario')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const senhaConfirm = document.getElementById('senhaConfirm')

form.addEventListener('submit', (e) => {
 e.preventDefault();

 checkInput()
} )

function checkInput(){
    const usuarioValue = usuario.value
    const emailValue = email.value
    const senhaValue = senha.value
    const senhaConfirmValue = senhaConfirm.value
    

    if(usuarioValue === ''){
        setErroFor(usuario, "O nome de usuário é obrigatório.")
    } else{
        setSucessoFor(usuario)
    }

    if(emailValue === ''){
        setErroFor(email, 'O email é obrigatório.')
    } else if(!checkEmail(emailValue)){
        setErroFor(email, 'O email é inválido.')
    }else{
        setSucessoFor(email)
    }

    if(senhaValue === ''){
        setErroFor(senha, 'A senha é obrigatória.')
    } else if(senhaValue.length<7){
        setErroFor(senha, 'A senha deve conter no mínimo 7 caracteres.')
    }else{
        setSucessoFor(senha)
    }
    if(senhaConfirmValue===''){
        setErroFor(senhaConfirm, 'A confirmação de senha é obrigatória.')
    } else if(senhaConfirmValue != senhaValue){
        setErroFor(senhaConfirm, 'As senhas não conferem.')
    } else{
        setSucessoFor(senhaConfirm)
    }

    const formConstrols = form.querySelectorAll('.form-control')

    const formEValido = [...formConstrols].every((formControl)=>{
        return (formControl.className === "form-control sucesso")
    })

    if(formEValido){
        console.log("A conta foi criada com sucesso.")
    }
}
function setErroFor(input, message){
    const formControl = input.parentElement
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control erro'

}
function setSucessoFor(input){
    const formControl = input.parentElement

    formControl.className = "form-control sucesso"
}
function checkEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( email);
  }
