const wrapper = document.querySelector('.wrapper');

const loginLink = document.querySelector('.login-link');

const registerLink = document.querySelector('.register-link');

const btnPopup = document.querySelector('.btnLogin-popup');

const iconClose = document.querySelector('.icon-close');


registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
})

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
})

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
})

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
})


/* ------------------------------------------------------------------------------------ */



let btn = document.querySelector('.btn')

btn.addEventListener('click', ()=>{
  let inputSenha = document.querySelector('password')
  
  if(inputSenha.getAttribute('type') == 'password'){
    inputSenha.setAttribute('type', 'text')
  } else {
    inputSenha.setAttribute('type', 'password')
  }
})

function entrar(){
    let email = document.querySelector('#email')
    let emailLabel = document.querySelector('#emailLabel')
    
    let password = document.querySelector('#password')
    let passwordLabel = document.querySelector('#passwordLabel')
    
    let msgError = document.querySelector('#msgError')
    let listaUser = []
    
    let userValid = {
      nome: '',
      email: '',
      password: ''
    }
    
    listaUser = JSON.parse(localStorage.getItem('listaUser'))
    
    listaUser.forEach((item) => {
      if(email.value == item.EmailCad && password.value == item.passwordCad){
         
        userValid = {
           nome: item.nomeCad,
           email: item.userCad,
           password: item.senhaCad
         }
        
      }
    })
     
    if(email.value == userValid.email && password.value == userValid.password){
      window.location.href = 'google.com'
      
      let mathRandom = Math.random().toString(16).number(2)
      let token = mathRandom + mathRandom
      
      localStorage.setItem('token', token)
      localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
      emailLabel.setAttribute('style', 'color: black')
      email.setAttribute('style', 'border-color: black')
      passwordLabel.setAttribute('style', 'color: black')
      password.setAttribute('style', 'border-color: black')
      msgError.setAttribute('style', 'display: block')
      msgError.innerHTML = 'Usuário ou senha incorretos'
      email.focus()
    }
    
  }
  
  








