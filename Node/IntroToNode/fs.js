const { readFile } = require('fs/promises');

const filePath = new URL('./index.html', import.meta.url);



console.log(filePath.href)

console.log(typeof contents);

