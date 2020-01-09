const sum = number => {
    let total = 0;
    const adder = number => {
        if (typeof number === 'undefined') {
            return total;
        } else if (typeof number === 'number') {
            total += number;
        }
        return adder;
    }
    return adder(number);
};

console.log(sum(1)(2)(3)() === 1 + 2 + 3);
console.log(sum(1)(2.5)(3)() === 1 + 2.5 + 3);
console.log(sum(1)(-2.5)(3)() === 1 - 2.5 + 3);
console.log(sum() === 0);
console.log(sum(1) !== 1);
console.log(sum('')() === 0);
console.log(sum(1)(3)('n')({})(-8.5)(true)() === 1 + 3 - 8.5);