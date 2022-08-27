function login(){
    var id = document.getElementById('id').value;
    var senha = document.getElementById('password').value;
    let errormsg = document.querySelector('#erro')

    if(id == "123" && senha == "123"){
        alert('Sucesso')
    }else{
      return
    }
    
    if(id == ''){
        errormsg.setAttribute('style', 'visibility: visible')
        errormsg.innerHTML = 'Preencha todos os campos corretamente.'
    }

}

var btn = document.querySelector('.fa-eye')

btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#password')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})

