function switchTo(theme){
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