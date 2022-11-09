const btnStart = document.getElementById("start-btn");
const wordInEl = document.getElementById("word");
const numberInEl = document.getElementById("number");
const pariDispariEl = document.getElementById("pari-dispari");


/**
 * divide una parole in input in un array contenente i suoi caratteri
 * @param {string} word
 * @return {Array} 
 */
function wordDisassemble(word) {
    if (typeof word !== "string") {
        alert("inserire del testo valido")
    }



    let characterArray = word.split("");


    /* return console.log(characterArray); */
    return characterArray;



}

/**
 * controlla se array di caratteri forma un parola palindroma
 * @param {Array} wordArray
 * @return {string}
 */
function palindrom(wordArray) {
    if (wordArray instanceof Array) {
        let pali = 0;

        for (i = 0; i <= (wordArray.length / 2); i++) {
            if (wordArray[i] !== wordArray[wordArray.length - (i + 1)]) {
                pali++;
            }
        }
        if (pali > 0) { console.log("la parola non é palindroma"); }
        else { console.log("la parola é palindroma"); }


    } else {
        return console.log("inserire un array come input");
    }
    /* 
             if (wordArray === (wordArray.sort())) {
                return console.log("la parola é palindroma");
            } else { return console.log("la parola non é palindroma"); }
      */


}

function paridisp(userNumber, oddOrNot) {
    aiNumber = Math.floor(Math.random() * 6);
    userNumber = parseInt(userNumber);

    if (typeof userNumber !== "number") {
        return console.log("inserire un numero");
    }
    if (userNumber > 5) {
        return console.log("inserire un numero da 1 a 5");
    }
    if (oddOrNot === "pari") {
        if ((aiNumber + userNumber) % 2 === 0) {
            return console.log(`il numero del Ai é ${aiNumber}, hai vinto!`);
        }
        else if ((aiNumber + userNumber) % 2 !== 0) {
            return console.log(`il numero del Ai é ${aiNumber}, hai perso!`);
        }
    }
    if (oddOrNot === "dispari") {
        if ((aiNumber + userNumber) % 2 === 0) {
            return console.log(`il numero del Ai é ${aiNumber}, hai perso!`);
        }
        else if ((aiNumber + userNumber) % 2 !== 0) {
            return console.log(`il numero del Ai é ${aiNumber}, hai vinto!`);
        }
    }
    /* aiNumber = Math.floor(Math.random() * 6);
    if (userNumber > 5 && typeof userNumber !== "number") { return console.log("inserire un numero da 1 a 5"); };
    if ((aiNumber + userNumber) % 2 === 0 && oddOrNot === "pari"){
        return console.log(`il numero del Ai é ${aiNumber}, hai vinto!`);

    } else if((aiNumber + userNumber) % 2 === 0 && oddOrNot === "dispari"){
        return console.log(`il numero del Ai é ${aiNumber}, hai perso!`);
    }  */
}





btnStart.addEventListener("click", function () {


    palindrom(wordDisassemble(wordInEl.value));

    paridisp(numberInEl.value, pariDispariEl.value);



})