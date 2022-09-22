var ID = document.getElementById("id")
var password = document.getElementById("senha")
var errormsg = document.querySelector("#erro")
var btn = document.querySelector("#login-button")

ID.addEventListener('textInput', id_verify)


function validated(){
    if(ID.value.length < 1){
        ID.style.border = "1px solid red";
        errormsg.innerHTML = "Digite o email corretamente"
        ID.focus();
        return false;
    }
    if(password.value.length < 9){
        password.style.border = "1px solid red"
        password.addEventListener('textInput', pass_verify)
        errormsg.innerHTML = "Digite a senha corretamente."
        password.focus();
        return false;
    }
}


function id_verify(){
    if (ID.value.length >= 8) {
        ID.style.border = "1px solid green"
        return true;
    }

    if (ID.value.length < 8) {
        ID.style.border = "1px solid red"
        
        return false;
    }

}

function pass_verify(){
    if(password.value.length >= 1){
        password.style.border = "1px solid green";
        return true;
    }
    if(password.value.length < 1)
        password.style.border = "1px solid red";
        password.focus();
        return false;
}