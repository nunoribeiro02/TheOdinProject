let password = document.querySelector("#password");
let passwordC = document.querySelector("#password-confirm");
let inputs = document.querySelectorAll("input")
let btnSubmit = document.querySelector("#submit")

password.addEventListener("input", verifyPassword);
passwordC.addEventListener("input", verifyPassword);

btnSubmit.addEventListener("click", validateSubmit);

function verifyPassword(){

    if (password.value == "" || passwordC.value == "") return;

    if (password.value == passwordC.value){ // Passwords Match
        password.classList.remove("error");
        passwordC.classList.remove("error");
    }
    else{ // Don't Match
        password.classList.add("error");
        passwordC.classList.add("error");
    }
}


function validateSubmit(){
    console.log("CLICK")
    for (let inpt of inputs){
        if (!inpt.checkValidity() || (inpt.value == "" && inpt.hasAttribute('required'))){
            console.log("one invalid")
            inpt.classList.add("error");
            
            inpt.addEventListener("input", function validate(){
                inpt.classList.remove("error");
                inpt.removeEventListener("input", validate);
            });
        }
    }
}
