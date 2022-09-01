function login(){
    var id = document.getElementById('id').value;
    var senha = document.getElementById('senha').value;

    //Logins =
    if(id == "grupo1@themartinscall.com" && senha == "657382811"){
        window.location.href = "./html/init/g1.html"
    }
    
    if(id == "professor.renato@themartinscall.com" && senha == "461283701"){
        window.location.href = "./html/init/pr.html"
    }else {
        errormsg.innerHTML = "Credenciais incorretas!"
    }
    
}

var pass_btn = document.querySelector('.fa-eye')

pass_btn.addEventListener('click', ()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    } else{
        inputSenha.setAttribute('type', 'password')
    }
})
