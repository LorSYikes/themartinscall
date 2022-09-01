let check = document.getElementById("check");
let btn = document.getElementById("btnInit")


function enable() {
    if(check.checked) {
        btn.classList.remove("btn-unchecked")
        btn.classList.add("btn-checked")
    }
    else {
        btn.classList.remove("btn-checked")
        btn.classList.add("btn-unchecked")
    }
    
}

function run(){
    window.location.href = "../levels/betamsg.html"
}