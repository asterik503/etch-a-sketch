const canvas = document.querySelector(".container")
modes = {
    normalMode : document.querySelector(".normal-mode"),
    randomMode : document.querySelector(".random-mode"),
    eraserMode : document.querySelector(".eraser-mode"),
    canvasMode : document.querySelector(".canvas")
}

let canvasSize = [1,2,4,5,10,25,50]
chosen = 0
let brush = ""
let block
function canvasSetter(){
    canvas.replaceChildren()
    if (chosen == 5){
        chosen = 0
    }
    else {
        chosen +=1
    }
    for (i=0;i<canvasSize[chosen]*canvasSize[chosen];i++){
        heightAndWidth = `${500/canvasSize[chosen]}px`
        block = document.createElement("div")
        block.style.cssText = `border: black 0.5px solid;
        height: ${heightAndWidth}; width: ${heightAndWidth};
        box-sizing: border-box;`
        block.classList.add("block")
        canvas.appendChild(block)
    }
}


modes.normalMode.addEventListener("click", function(){
    brush = prompt("Enter desired color's hex value: ")
    block = document.querySelector(".block")
    block.addEventListener("click",function(){
        block.style.cssText = `background-color: ${brush}`
    })

})

modes.canvasMode.addEventListener("click",canvasSetter)
