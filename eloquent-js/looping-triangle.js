//my initial approach...
let brush = "";
for (let i = 0; i < 7; i++) {
    brush += "#";
    console.log(brush);
}

//a smarter approach...
for (let line = "#"; line.length < 8; line += "#") {
    console.log(line);
}