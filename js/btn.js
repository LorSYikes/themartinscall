let check = document.getElementById("check");
var btn = document.getElementById("btnInit")


function enable() {
    if(check.checked) {
        btn.classList.remove("btn-unchecked");
        btn.classList.add("btn-checked");
        btn.disabled = false
    }
    else {
        btn.classList.remove("btn-checked");
        btn.classList.add("btn-unchecked");
        btn.disabled = true
    }
    
}

function run(){
    window.location.href = "../lvls/a1.html"
}