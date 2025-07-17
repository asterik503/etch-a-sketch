const canvas = document.querySelector(".container")
modes = {
    normalMode : document.querySelector(".normal-mode"),
    randomMode : document.querySelector(".random-mode"),
    eraserMode : document.querySelector(".eraser-mode"),
    canvasMode : document.querySelector(".canvas")
}

let canvasSize = [1,2,4,5,10,25,50]
chosen = 0
let brush = "white"
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
        box-sizing: border-box; background-color: white`
        block.classList.add("block")
        canvas.appendChild(block)
    }
    blockevent(brush,0)
}


modes.normalMode.addEventListener("click", function(){
    brush = prompt("Enter desired color's hex value: ")
    blockevent(brush,0)
})

modes.canvasMode.addEventListener("click",canvasSetter)
canvasSetter()
function blockevent(color="",modal){
    blocks = document.querySelectorAll(".block")
    blocks.forEach(block => {
    block.addEventListener("mouseover",function(){
        if (modal == 0){
             block.style.cssText += `background-color: ${color}`
        }
        else {
            block.style.backgroundColor = `hsl(${Math.random()*360} ${Math.random()*100} ${Math.random()*100})`
        }
    })    
});
}

modes.eraserMode.addEventListener("click",function(){
    blockevent("white",0)
})

modes.randomMode.addEventListener("click",function(){
    blockevent("random",1)
})