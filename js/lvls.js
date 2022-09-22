var text = document.getElementById("l-tbox")

function a1(){
    if(text.value == "Ok"){
        window.location.href = "../lvls/b2.html"
        
    }
    else{
        text.style.border = "1px solid red"
    }
}

function b2(){
    if(text.value == "987563"){
        window.location.href = "../lvls/c3.html"
    }
    else{
        text.style.border = "1px solid red"
    }
}

function c3(){
    if(text.value == "Adriana"){
        window.location.href = "../lvls/e4.html"
    }
    if(text.value == "João"){
        window.location.href = "../lvls/e4.html"
    }

    else{
        text.style.border = "1px solid red "
    }
}

function e4(){
    if(text.value == "Adriana"){
        window.location.href = "../lvls/a5.html"
    }
    if(text.value == "João"){
        window.location.href = "../lvls/a5.html"
    }
    else{
        text.style.border = "1px solid red "
    }
}

function a5(){
    if(text.value == "5 e 3 7"){
        window.location.href = "../lvls/b6.html"
    }
    if(text.value == "5 e 37"){
        window.location.href = "../lvls/b6.html"
    }
    if(text.value == "5:37"){
        window.location.href = "../lvls/b6.html"
    }
    else{
        text.style.border = "1px solid red"        
    }

}

function b6(){
    if(text.value == "Adriana"){
        window.location.href = "../lvls/c7.html"
    }
    if(text.value == "adriana"){
        window.location.href = "../lvls/c7.html"
    }
    else{
        text.style.border = "1px solid red"
    }
}

function c7() {
    window.location.href = "../lvls/end.html"

}