let count1 = 0;
let count2 = 0;
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let reset_btn = document.querySelector(".btn-red");
let insert = document.querySelector(".insert");
let msg = document.querySelector("#msg");
let display = document.querySelector("#display");
let table = document.querySelector("#mytable");

table.style.visibility = "hidden";
const tableHTML = `<tr>
        <th>Player 1</th>
        <th>Player 2</th>
    </tr>`;
button1.addEventListener("click", () => {
    count1++;
    display.placeholder = count1;
    table.style.visibility = "visible";
    if (count1 == 5) {
        msg.innerText = `Winner is Player 1`;
        disableButton();
    }
    addRow();
})

button2.addEventListener("click", () => {
    count2++;
    display.placeholder = count2;
    table.style.visibility = "visible";
    if (count2 == 5) {
        msg.innerText = `Winner is Player 2`;
        disableButton();
    }
    addRow();
})

const disableButton = () => {
    if (count1 == 5 || count2 == 5) {
        button1.disabled = true;
        button2.disabled = true;
    }
};

const enableButton = () => {
    count1 = 0;
    count2 = 0;
    display.placeholder = count1;
    button1.disabled = false;
    button2.disabled = false;
    msg.innerHTML = `Update the scores to check for the winner`;
};

reset_btn.addEventListener("click", () => {
    enableButton();
    table.style.visibility = "hidden";
    stopAddRow();
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