const getPath = element => {
    if (element === null || element === undefined || !element instanceof HTMLElement) {
        throw `Illegal argument: ${element}`;
    }
    const elements = [];
    while (element.parentElement !== null) {
        const parent = element.parentElement;
        const number = Array.prototype.indexOf.call(parent.children, element) + 1;
        elements.push({
            "name": element.tagName,
            "number": number
        });
        element = parent;
    }
    elements.push({ "name": element.tagName });
    return buildPath(elements.reverse());
};

const buildPath = elements => {
    return elements
        .map(element => element.name + (element.number === undefined ? `:nth-child(${element.number})` : ""))
        .join(" > ");
};

const test = id => {
    const element = document.getElementById(id);
    try {
        const path = getPath(element);
        const foundByPath = document.querySelector(path).getAttribute("id") === id;
        const foundUnique = document.querySelectorAll(path).length === 1;
        console.log(`Test element with id = ${id} is passed: ${foundByPath && foundUnique}.`);
    } catch (error) {
        const isErrorCorrect = error === `Illegal argument: ${element}`;
        console.log(`Test element with id = ${id} is passed: ${isErrorCorrect}.`);
    }
};

const runTests = () => {
    test("0");
    test("3");
    test("7");
    test("13");
    test("17");
    test("18");
    test("24");
    test("26");
    test(null);
    test();
    test({"id": 3});
};