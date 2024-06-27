let string = ""
let butons= document.querySelectorAll("button")
let inputBox = document.querySelector("input")

butons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        if(e.target.innerHTML=="AC"){
            string=""
            inputBox.value =string
        }
        else if(e.target.innerHTML=="DEL"){
            string = string.substring(0,string.length-1)
            inputBox.value=string
        }
        else if(e.target.innerHTML=="="){
            if(string!=""){
            string = eval(string)
            inputBox.value=string
            }
        }
        else{
            string = string + e.target.innerHTML
            inputBox.value = string;
        }
    })
})