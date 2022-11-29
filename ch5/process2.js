const process = require('process');

console.log('start');

setTimeout(() => {
    console.log('timeout callback');
}, 0);

process.nextTick(() => {
    console.log('nextTick callback');
});

console.log('end');