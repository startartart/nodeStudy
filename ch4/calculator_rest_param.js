const defaultNum = 1;

function add(...args) {
    return args.reduce((acc, cur) => acc + cur, 0);
}

function minus(main, ...args) {
    return args.reduce((acc, cur) => acc - cur, main);
}

function mul(main, ...args) {
    return args.reduce((acc, cur) => acc * cur, main);
}

function divide(main, ...args) {
    return args.reduce((acc, cur) => acc / cur, main);
}

module.exports = {
    defaultNum,
    add,
    minus,
    mul,
    divide
};