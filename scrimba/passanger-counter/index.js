let count = 0
let countTotal = count

let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")

function increment() {
    count += 1
    countEl.textContent = count
    console.log("Current count is: " + count)
}

function save() {
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0
    countTotal += count
    count = 0
    console.log("Total count is: " + countTotal)
}