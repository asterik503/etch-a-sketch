function canvasSetter(){
    modes.container.replaceChildren()
    if (canvasSize == 6){
        canvasSize = 0
    }
    else {
        canvasSize +=1
    }
    for (i=0;i<canvasSizeChoices[canvasSize]*canvasSizeChoices[canvasSize];i++){
        heightAndWidth = `${500/canvasSizeChoices[canvasSize]}px`
        let block = document.createElement("div")
        block.style.cssText += `height: ${heightAndWidth}; width: ${heightAndWidth}px;`
        block.classList.add("block")
        modes.container.appendChild(block)
    }
    blockevent(brush,0)
}

function blockevent(color="",mode){
    blocks = document.querySelectorAll(".block")
    blocks.forEach(block => {
    block.addEventListener("mouseover",function(){
        if (mode == 0){
             block.style.cssText += `background-color: ${color}`
        }
        else {
            block.style.backgroundColor = `hsl(${Math.random()*360} ${Math.random()*100} ${Math.random()*100})`
        }
    })    
});
}
modes = {
    normalMode : document.querySelector(".normal-mode"),
    randomMode : document.querySelector(".random-mode"),
    eraserMode : document.querySelector(".eraser-mode"),
    canvasMode : document.querySelector(".canvas"),
    container : document.querySelector(".container")
}

const canvasSizeChoices = [1,2,4,5,10,25,50]
let canvasSize = 0
let brush = "white"
modes.randomMode.addEventListener("click",blockevent)
modes.canvasMode.addEventListener("click",canvasSetter)
modes.normalMode.addEventListener("click", function(event){
    brush = prompt("Enter desired color's hex value: ")
    blockevent(brush,0)
})
modes.eraserMode.addEventListener("click",(event) => blockevent("white",0))
canvasSetter()