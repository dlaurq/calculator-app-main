function SwitchTo(theme){
    const body = document.querySelector("body");
    const hide = "hide-button"
    const themeButtons =  Array.from(document.querySelector(".theme-selector").children);

    body.className = '';
    body.classList.add(theme)

    themeButtons.forEach(themeButton => {
        if(themeButton.classList.contains(theme))
            themeButton.classList.remove(hide)
        if(!themeButton.classList.contains(theme))
            themeButton.classList.add(hide)
    });
}


const buttonContainer = document.querySelector(".buttons-container");
let firstNumber = 0;
let secondNumber;
let lastOperator;
let lastKey;
let operatorIsPress = false;
buttonContainer.addEventListener('click', e =>{
    const display = document.querySelector('.result');
    const displayValue = display.textContent;
    const button = e.target;
    const buttonValue = button.textContent;
    
    if(button.classList.contains('number')){
        lastKey = button;
        if(displayValue ==='0' || operatorIsPress){
            display.textContent = buttonValue;
            operatorIsPress = false
        }
        else{
            display.textContent = displayValue + buttonValue;
        }
        
    }

    if(button.classList.contains("operator")){
        operatorIsPress = true;
        lastKey = button;

        if(lastOperator !== undefined) {
            secondNumber = display.textContent

            if(button.classList.contains('equal') && !lastOperator.classList.contains('equal')){
                firstNumber = parseFloat(firstNumber)
                secondNumber = parseFloat(secondNumber)
                Equals(firstNumber, lastOperator, secondNumber)
                lastOperator = button;
            }

            if(button.classList.contains('plus')||
                button.classList.contains('minus')||
                button.classList.contains('div')||
                button.classList.contains('mult')){
                    firstNumber = parseFloat(firstNumber)
                    secondNumber = parseFloat(secondNumber)
                    firstNumber = Equals(firstNumber, lastOperator, secondNumber)
                    lastOperator = button;
                }

        }
        if(lastOperator === undefined) {
            firstNumber = display.textContent
            lastOperator = button;

        }
    }


    

    function Equals(firstNumber, operator, secondNumber){
        console.log(firstNumber, operator, secondNumber)
        firstNumber = String(firstNumber)
        secondNumber = String(secondNumber)
        firstNumber = parseFloat(firstNumber)
        secondNumber = parseFloat(secondNumber)
        if(operator.classList.contains('plus')) firstNumber = firstNumber + secondNumber;
        if(operator.classList.contains('minus')) firstNumber = firstNumber - secondNumber;
        if(operator.classList.contains('div')) firstNumber = firstNumber / secondNumber;
        if(operator.classList.contains('mult')) firstNumber = firstNumber * secondNumber;
        display.textContent = firstNumber;
        return firstNumber
        console.log(firstNumber)
    }
    console.log(firstNumber, secondNumber, lastOperator)
    console.log(typeof firstNumber,typeof secondNumber)
});


