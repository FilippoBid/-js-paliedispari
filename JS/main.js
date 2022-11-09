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

        for (i = 0; i <= (wordArray.length / 2); i++) {
            if (wordArray[i] === wordArray[wordArray.length - (i + 1)]) {
                return console.log("la parola é palindroma");
            } else {return console.log("la parona non é palindorma");}
        }

    } else {
        return console.log("inserire un array come input");
    }
    /* 
             if (wordArray === (wordArray.sort())) {
                return console.log("la parola é palindroma");
            } else { return console.log("la parola non é palindroma"); }
      */


}


btnStart.addEventListener("click", function () {


    palindrom(wordDisassemble(wordInEl.value));



})