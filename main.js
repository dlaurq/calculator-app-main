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
        else if(!button.classList.contains("dot")) display.textContent = displayValue + buttonValue;
        else if(display.textContent.indexOf(".")== -1) display.textContent = displayValue + buttonValue;
    }

    if(button.classList.contains("operator")){
        

        //Daca nu este primul operator
        if(lastOperator !== undefined) {
            
            if(lastKey.classList.contains("number")){
                secondNumber = display.textContent
            } 

            //Daca apas egal
            if(button.classList.contains('equal') && !lastOperator.classList.contains('equal')){

                firstNumber = parseFloat(firstNumber)
                secondNumber = parseFloat(secondNumber)
                firstNumber = Equals(firstNumber, lastOperator, secondNumber)
                display.textContent = firstNumber;
            }

            //Daca apas + - * /
            if(button.classList.contains('plus')||
                button.classList.contains('minus')||
                button.classList.contains('div')||
                button.classList.contains('mult')){
                    lastOperator = button;
                }

        }
        //Daca este primul operator
        if(lastOperator === undefined) {
            firstNumber = display.textContent
            lastOperator = button;

        }
        operatorIsPress = true;
        lastKey = button;
    }

    if(button.classList.contains("del")){
        if(display.textContent.length == 1) display.textContent = 0; //Pt cifra
        if(display.textContent.length > 1) display.textContent = display.textContent.slice(0,-1); //Pt numar
        firstNumber = parseFloat(display.textContent) 
    }

    if(button.classList.contains("reset")){
        firstNumber = 0;
        secondNumber = undefined;
        lastOperator = undefined;
        lastKey = undefined;
        operatorIsPress = false;
        display.textContent = 0;
        //TO DO
    }


    

    function Equals(firstNumber, operator, secondNumber){
        firstNumber = String(firstNumber)
        secondNumber = String(secondNumber)
        firstNumber = parseFloat(firstNumber)
        secondNumber = parseFloat(secondNumber)
        if(operator.classList.contains('plus')) return firstNumber + secondNumber;
        if(operator.classList.contains('minus')) return firstNumber - secondNumber;
        if(operator.classList.contains('div')) return firstNumber / secondNumber;
        if(operator.classList.contains('mult')) return firstNumber * secondNumber;
    }


    display.textContent = display.textContent.substring(0,11)
});


