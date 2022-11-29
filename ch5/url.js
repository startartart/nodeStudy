const url  = require('url');

const myURL = new URL('https:/example.org/?user=abc&query=xyz');

console.log(myURL.searchParams.get('user'));
console.log(myURL.searchParams.has('user'));
console.log(myURL.searchParams.keys());
console.log(myURL.searchParams.values());
myURL.searchParams.append('user', 'admin');

console.log(myURL.searchParams.getAll('user'));
myURL.searchParams.set('user', 'admin');
myURL.searchParams.delete('user');
console.log(myURL.searchParams.toString());

console.log(url.parse('https:://user:pass@sub.example.com:8080/p/a/t/h?quert=string#hash'));