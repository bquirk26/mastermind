const {ALL_POSSIBLE_CODES, evaluateGuess, adversarialPrune, findMaxKey, toInts} = require('./gamelogic.js');

test('toInts', () => {
    expect(toInts('1234')).toStrictEqual([1, 2, 3, 4]);
});

let codes = adversarialPrune([1, 1, 2, 2], ALL_POSSIBLE_CODES).arr;
let codes2 = adversarialPrune([1, 1, 2, 2 ], codes).arr;
let codes3 = adversarialPrune([4, 4, 4, 3], codes2).arr;

test('no extra', () => {
    expect(codes).toStrictEqual(codes2);
})

test('eval 1', () => {
    expect(evaluateGuess([1, 1, 2, 2], [1, 2, 3, 4])).toStrictEqual([1, 1]);
})

 test('eval 2', () => {
    expect(evaluateGuess([1, 2, 3, 4], [4, 3, 2, 1])).toStrictEqual([0, 4])
 })


