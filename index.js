const countEl = document.getElementById("count-el");
const btnIncrement = document.getElementById("increment-btn");
const btnDecrement = document.getElementById("decrement-btn");
const btnReset = document.getElementById("reset-btn");
const btnSave = document.getElementById("save-btn");
const savedCount = document.getElementById("saved-count");

let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function decrement() {
  if (count > 0) {
    count -= 1;
    countEl.innerText = count;
  }
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function save() {
  const savedCount = document.getElementById("saved-count");
  savedCount.textContent += " ";
  savedCount.textContent += count + " - ";
  reset();
}

btnIncrement.addEventListener("click", increment);
btnDecrement.addEventListener("click", decrement);
btnReset.addEventListener("click", reset);
btnSave.addEventListener("click", save);
