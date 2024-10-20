let count1 = 0;
let count2 = 0;
let button1 = document.querySelector(".btn1");
let button2 = document.querySelector(".btn2");
let reset_btn = document.querySelector(".btn-red");
let insert = document.querySelector(".insert");
let msg = document.querySelector("#msg");
let display = document.querySelector("#display");

// const start = () => {
button1.addEventListener("click", () => {
    count1++;
    display.placeholder = count1;
    if (count1 == 5) {
        msg.innerText = `Winner is Player 1`;
        disableButton();
    }
})

button2.addEventListener("click", () => {
    count2++;
    display.placeholder = count2;
    if (count2 == 5) {
        msg.innerText = `Winner is Player 2`;
        disableButton();
    }
})
// }

const disableButton = () => {
    if (count1 == 5 || count2 == 5) {
        button1.disabled = true;
        button2.disabled = true;
        // enableButton();
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
})
