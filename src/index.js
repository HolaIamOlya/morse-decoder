const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let result = ""
    for(let i = 0, k = 10; i < expr.length; i = i + 10, k = k + 10){
        let fromNumber = "";
        fromNumber = expr.slice(i, k);
        let mors = "";
        if(fromNumber === "**********"){
            mors = mors + " ";
        }else{
            for(let a = 0, b = 2; a < 10; a = a + 2, b = b + 2){
                if(fromNumber.slice(a, b) === "10"){
                    mors = mors + ".";
                }
                else if(fromNumber.slice(a, b) === "11"){
                    mors = mors + "-";
                }
            }  
        }
        if(mors === " "){
            result = result + " ";
        }else{
            result = result + MORSE_TABLE[mors]
        }
    }
    return result
    }

module.exports = {
    decode
}