/*
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

//inputs 
const msgText   = document.querySelector("#message");
const msgResult = document.querySelector("#result");

// botones
const btnEncrypt = document.querySelector("#encrypt");
const btnDecrypt = document.querySelector("#decrypt");
const btnCopy    = document.querySelector("#copy");
const btnListen  = document.querySelector("#listen");

const msgcard = document.querySelector(".message_card");

function validation(){

 // Delete errors
    let errors = msgcard.querySelectorAll(".error");
    for (let err of errors ){
    //  console.log(err);
        msgcard.removeChild(err);
    }

// validation    
    let msg = msgText.value;
    let letters =" abcdefghijklmnñopqrstuvwxyz";
    let msgError = document.createDocumentFragment();
    
    for (let letter of msg) {
        let p = document.createElement("p");
        
        p.classList.add("error");
    
        if (!letters.includes(letter)){
            p.innerHTML = "La letra o caracter <b>"+ letter +"</b> no es válida";
            msgError.appendChild(p);
            }
 
    }

    msgcard.appendChild(msgError);
    if (msgError.children.length === 0){
        return true
        }
    return false; 
  

}


function encrypt(){
if (!validation()) return;
let msg = msgText.value;
let msgEncrypted = msg

.replaceAll("e", "enter")
.replaceAll("i", "imes")
.replaceAll("a", "ai")
.replaceAll("o", "ober")
.replaceAll("u", "ufat");

console.log(msgEncrypted);
msgResult.value = msgEncrypted;
}

function decrypt(){
    let msg = msgText.value;
    let msgDecrypted = msg
    

    .replaceAll("enter", "e")
    .replaceAll("imes",  "i")
    .replaceAll("ai",    "a")
    .replaceAll("ober",  "o")
    .replaceAll("ufat",  "u");
    
    console.log(msgDecrypted);
    msgResult.value = msgDecrypted;

}

function copy(){

    let msgEncrypted = msgResult.value;
    navigator.clipboard.writeText(msgEncrypted);
    
}

 btnEncrypt.onclick = encrypt;
 btnDecrypt.onclick = decrypt;
 btnCopy.onclick = copy;