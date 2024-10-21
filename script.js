let count1 = 0;
let count2 = 0;
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let reset_btn = document.querySelector(".btn-red");
let set_btn = document.querySelector(".btn-green");
let insert = document.querySelector(".insert");
let msg = document.querySelector("#msg");
let table = document.querySelector("#mytable");
let display = document.getElementById("display");

table.style.visibility = "hidden";
const tableHTML = `<tr>
        <th>Player 1</th>
        <th>Player 2</th>
    </tr>`;

button1.disabled = true;
button2.disabled = true;
reset_btn.disabled = true;

set_btn.addEventListener("click", () => {
    enableButton();
    reset_btn.disabled = false;
    let target = display.value;
})

button1.addEventListener("click", () => {
    count1++;
    let target = display.value;
    table.style.visibility = "visible";
    if (count1 == target) {
        msg.innerText = `Winner is Player 1`;
        disableButton();
    }
    addRow();
})

button2.addEventListener("click", () => {
    count2++;
    let target = display.value;
    table.style.visibility = "visible";
    if (count2 == target) {
        msg.innerText = `Winner is Player 2`;
        disableButton();
    }
    addRow();
})

const disableButton = () => {
    let target = display.value;
    if (count1 == target || count2 == target) {
        button1.disabled = true;
        button2.disabled = true;
    }
};

const enableButton = () => {
    count1 = 0;
    count2 = 0;
    // display.placeholder = count1;
    button1.disabled = false;
    button2.disabled = false;
    msg.innerHTML = `Update the scores to check for the winner`;
};

reset_btn.addEventListener("click", () => {
    enableButton();
    table.style.visibility = "hidden";
    stopAddRow();
    display.value = "";
    button1.disabled = true;
    button2.disabled = true;
    reset_btn.disabled = true;
})

const addRow = () => {
    table.innerHTML = tableHTML;
    let newRow = table.insertRow();
    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    cell1.innerHTML = count1;
    cell2.innerHTML = count2;
};

const stopAddRow = () => {
    table.innerHTML = "";
}