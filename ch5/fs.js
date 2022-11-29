const fs = require("fs");

let data = "2022. 11. 29. 창원대학교 3학년 재학 IVIS 박병권";

fs.writeFileSync("./example", data, 'utf8');
console.log("1. " + data);

let text = fs.readFileSync("./example.txt", "utf-8");
console.log("2. " + text);

fs.writeFile("./example.txt", data, "utf-8", (err) => {
    if (err) throw err;
    console.log("3. " + data);
    fs.readFile("./example.txt", (err, data) => {
        if (err) throw err;
        console.log("4. " + data);
    });
});
