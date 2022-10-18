function cartesianProduct(arr) {
    let arrayList = arr.map((elem) => [elem]);
    let newList = [];
    for (let c = 1; c < 4; c++) {
        for (let i = 0; i < arr.length; i++) {
            for (let j = 0; j < arrayList.length; j++) {
                let a4 = [arr[i]];
                a4 = a4.concat(arrayList[j]);
                newList.push(a4);
            }
        }
        arrayList = newList;
        newList = [];
    }
    return arrayList;
}


const ALL_POSSIBLE_CODES = cartesianProduct([1, 2, 3, 4, 5, 6]);

let codes = ALL_POSSIBLE_CODES;

function evaluateGuess(guess, code) {
    let D = 0;
    let I = 0;
    let trueCode = [... code];
    for (let i = 0; i < 4; i++) {
        if (guess[i] == trueCode[i]) {
            D += 1;
            trueCode[trueCode.indexOf(guess[i])] = "hello";
        }
    }
    for (let i = 0; i < 4; i++) {
        if (trueCode.includes(guess[i])) {
            I += 1;
            trueCode[trueCode.indexOf(guess[i])] = "hello";
        }
    }
    return [D, I]
}


// knuth's algorithm
function prune(possibleCodes) {
    let arr = [];
    for (let i = 0; i < 1296; i++) {
        let guess = ALL_POSSIBLE_CODES[i];
        
    }
}

// worst
function adversarialPrune(guess, possibleCodes) {
    const countMap = new Map();
    const codeMap = new Map();
    for (let i = 0; i < possibleCodes.length; i++) {
        let code = possibleCodes[i];
        let hint = evaluateGuess(guess, code).toString();
        let count = countMap.get(hint);
        let codeArray = codeMap.get(hint);
        if (codeMap.has(hint)) {
            countMap.set(hint, count + 1);
            codeArray.push(code);
            codeMap.set(hint, codeArray);
        } else {
            countMap.set(hint, 1);
            codeMap.set(hint, [code])
        }
    }
    let finalHint = findMaxKey(countMap)
    return {hint: finalHint, arr : codeMap.get(finalHint)};
}





function findMaxKey(map) {
    let maxCount = 0;
    let maxKey = 'none';
    for (let [key, value] of map) {
        if (value > maxCount) {
            maxCount = value;
            maxKey = key;
        }
    }
    return maxKey;
}

function toInts(s) {
    let arr = [];
    let str = [...s]
    for (let i = 0; i < str.length; i++) {
        arr.push(parseInt(str[i]));
    }
    return arr;
}

codes = adversarialPrune([1, 1, 2, 2], ALL_POSSIBLE_CODES).arr;
let codes2 = adversarialPrune([2, 2, 3, 3], codes).arr;
let codes3 = adversarialPrune([3, 1, 1, 3], codes2).arr;
let codes4 = adversarialPrune([2, 2, 2, 2], codes3).arr;





/**
 * 
 * @param {*} guess 
 * @param {*} possibleCodes 
 * @returns 
 * 
 * what should findWorst do?
 * look at every possible code.
 * if this code were the true one, what hint would we give? 
 * log the hint or add 1 to its tally
 * look at all your hints: which is the greatest one? 
 * 
 * 
 */


/*
function findWorst(guess, possibleCodes) {
    const newMap = new Map();
    for (let i = 0; i < possibleCodes.length; i++) {
        let code = possibleCodes[i];
        let hint = evaluateGuess(guess, code);
        if (newMap.has(hint)) {
            newMap.set(hint, newMap.get(hint) + 1);
        } else {
            newMap.set(hint, 1);
        }
    }
    let max = 0;
    let newHint;
    newMap.forEach((key, value) => {
        if (value > max) {
            max = value;
            newHint = key;
        }
    })
    return newHint;
} */



module.exports =  {ALL_POSSIBLE_CODES, evaluateGuess, adversarialPrune, findMaxKey, toInts};



/**
 * 1, 1, 1
 * 1, 1, 2
 * 1, 2, 1
 * 1, 2, 2
 * 1, 1, 3
 * 1, 3, 1
 * 1, 3, 3
 * 1, 2, 3
 * 1, 3, 2
 * ..
 * 
 * 1, 1
 * 1, 2
 * 2, 1
 * 2, 2
 * 
 * 
 * 
 */