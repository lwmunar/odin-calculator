let add = (a,b) => a+b;
let subtract = (a,b) => a-b;
let multiply = (a,b) => a*b;
let divide = (a,b) => a/b;

function operate(func,numA,numB) {
    return func(numA,numB);
}

function clickNumBtn(event) {

    let value = btnVal[event.target.getAttribute("class")];

    calc.userInput += value;
    display.textContent = calc.userInput;

}

function clickOprBtn(event) {

    let value = btnVal[event.target.getAttribute("class")];

    if (value == btnVal.opRes && calc.numA && calc.numB) {
        calc.result = operate(calc.opSymbol,+calc.numA,+calc.numB);

        display.textContent = calc.result;
        calc.userInput = "";
        calc.numA = "";
        calc.numB = "";
        calc.opSymbol = "";

    }
    else if (value == btnVal.opRes && calc.numA && !calc.numB) {
        calc.numB = calc.userInput;
        calc.result = operate(calc.opSymbol,+calc.numA,+calc.numB);

        display.textContent = calc.result;
        calc.userInput = "";
        calc.numA = "";
        calc.numB = "";
        calc.opSymbol = "";
    }

    else if (value != btnVal.opRes) {

        if (!calc.numA && !calc.result) {
            calc.numA = calc.userInput;
            calc.opSymbol = value;

            calc.userInput = "";
        }
        else if (!calc.numA && calc.result) {
            calc.numA = calc.result;
            calc.opSymbol = value;

            calc.userInput = "";
        }
        else if (calc.numA && !calc.numB) {
            calc.numB = calc.userInput;

            calc.result = operate(calc.opSymbol,+calc.numA,+calc.numB);

            calc.userInput = "";
            calc.numA = calc.result;
            calc.numB = "";
            calc.opSymbol = value;
            display.textContent = calc.result;
        }
        else if (calc.numA && calc.numB) {

            calc.result = operate(calc.opSymbol,+calc.numA,+calc.numB);

            calc.userInput = "";
            calc.numA = calc.result;
            calc.numB = "";
            calc.opSymbol = value;
            display.textContent = calc.result;
        }

    }

}

function clickRmvBtn(event) {

    switch (event.target.getAttribute("class")) {
        case ("delete"):

            calc.userInput = calc.userInput.slice(0,-1);
            display.textContent = calc.userInput;

            break;

        case ("clear"):

            calc = {
            userInput : "",
            numA : "",
            numB : "",
            opSymbol : "",
            result : "",
            };

            display.textContent = "";

            break;

        default:
            break;
    }

}

let display = document.querySelector(".display")
let numButtons = document.querySelectorAll(".numbers button");
let oprButtons = document.querySelectorAll(".operation button");
let rmvButtons = document.querySelectorAll(".remove button");

const btnVal = {
    num1 : "1",
    num2 : "2",
    num3 : "3",
    num4 : "4",
    num5 : "5",
    num6 : "6",
    num7 : "7",
    num8 : "8",
    num9 : "9",
    num0 : "0",
    opAdd: add,
    opSub: subtract,
    opMul: multiply,
    opDiv: divide,
    opRes: operate,
    }

let calc = {
    userInput: "",
    numA : "",
    numB : "",
    opSymbol : "",
    result : "",
};


numButtons.forEach(btn=>{
    btn.addEventListener("click",clickNumBtn);
});

oprButtons.forEach(btn=>{
    btn.addEventListener("click",clickOprBtn);
});

rmvButtons.forEach(btn=>{
    btn.addEventListener("click",clickRmvBtn);
});