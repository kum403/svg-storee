const svgElements = document.querySelectorAll(".svg-container")
// const svgCode = document.querySelector(".svg-code")
const codeElement = document.querySelector(".code")
const svgHolder = document.querySelector(".svg-holder")
const btn = document.querySelector(".download-btn")
const btnCopy = document.querySelector(".copy-btn")
const copyMsg = document.querySelector(".copy-msg")
// const svgName = document.querySelector("#svg-name")

let theCode;

svgElements.forEach(function(svgElement){
    svgElement.addEventListener("click", function(){
        onClickedSvg(svgElement)
    })
})
   

     function onClickedSvg(svgElement){
            let id = svgElement.id
            let svg = svgElement.innerHTML
            svgHolder.innerHTML = `${svg} <span id="svg-name"></span>`
            codeElement.textContent = svg
    
            btn.setAttribute("href",`./svg/FA6_pro_all/${id}`)
            
            theCode = svg
        }
    
       



function copySvg(){ 
    navigator.clipboard.writeText(theCode)
    copyMsg.classList.toggle("show-copy-msg")
    setTimeout(function(){
        copyMsg.classList.remove("show-copy-msg")
    },1000)

}

btnCopy.addEventListener("click", copySvg)