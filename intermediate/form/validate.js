console.log("Hello world!")

let password = document.querySelector("#password");
console.log("Hello !")
let passwordC = document.querySelector("#password-confirm");
console.log(" world!")

password.addEventListener("input", verifyPassword);
passwordC.addEventListener("input", verifyPassword);

function verifyPassword(){
    console.log("Verify")
    if (password.value == "" || passwordC.value == "") return;

    if (password.value == passwordC.value){ // Passwords Match
        password.classList.remove("error");
        passwordC.classList.remove("error");
        console.log("MATHC tch")

    }
    else{ // Don't Match
        console.log("dont match")
        password.classList.add("error");
        passwordC.classList.add("error");
    }
}