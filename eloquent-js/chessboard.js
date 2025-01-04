//set grid size
let size = 8;

let grid = "";

for (let c = 0; c < size; c++) {
    //printing rows
    for (let r = 0; r < size; r++) {
        if ((c + r) % 2 === 0) {
            grid += " ";
        } else {
            grid += "#";
        }
    }
    //add new line
    grid += "\n";
}

console.log(grid);