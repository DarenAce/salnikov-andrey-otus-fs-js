const promiseReduce = (asyncFunctions, reduce, initialValue) => asyncFunctions.reduce(
    async (previousValue, item) => {
        const memo = await previousValue;
        const current = await item();
        return reduce(memo, current);
    },
    Promise.resolve(initialValue)
);

const test_1 = async () => {
    const fn1 = () => Promise.resolve(1);
    const fn2 = () => new Promise(resolve => setTimeout(() => resolve(2), 1000));
    const result = await promiseReduce([fn1, fn2], (memo, value) => memo * value, 2);
    console.log("Test 1 is passed: " + (result === 2 * 1 * 2));
};

const test_2 = async () => {
    const fn1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
    const fn2 = () => Promise.resolve(2);
    const result = await promiseReduce([fn1, fn2], (memo, value) => value, 0);
    console.log("Test 2 is passed: " + (result === 2));
};

test_1().then(test_2);