//selector
const output = document.querySelector(".output");
const result = document.querySelector(".result");
const keys = document.querySelectorAll("button");

//eventlistener for all buttons
keys.forEach(key=>{
    key.addEventListener("click",calculate);
});

function calculate(){
    let buttonText = this.innerText; // bring the value from the tag
    if(buttonText === "AC"){
        output.innerText = "";
        result.innerText = "0";
        result.style.animation = "";
        output.style.animation = "";
        return;
    }

    if (buttonText === '÷'){
        buttonText = "/" ;
    }
    //  make delete button operate and delet last number every time we click on it
    if(buttonText === "DEL"){
        
        output.textContent = output.textContent.substr(0, output.textContent.length  -  1 );
        return;
    }

    if(buttonText === "="){

        if (output.innerHTML[0] === "/"  || output.innerHTML[0] === "*" ) {
            output.textContent = "Error" ;
            return ;
        }

        // every operation that end with operator is an error
        let l = output.textContent.length-1 ;
        if (output.innerHTML[l] === "/"  || output.innerHTML[l] === "-"   || output.innerHTML[l] === "l"   || output.innerHTML[l] === "*" ) {
            output.textContent = "Error" ;
            return ;
        }

        let index = output.innerHTML.indexOf ("/");
        if (index != -1 ) {
            if (output.innerHTML.slice (index+1, l+1 ) == 0){
                output.textContent = "Error" ;
                return;
            }
        
        }
        result.innerText = eval (output.innerText);
        result.style.animation = "big 0.5s ease-in-out";
        output.style.animation = "small 0.5s ease-in-out";
        result.style.animationFillMode = "forwards";
        output.style.animationFillMode = "forwards";

    }

    else{
        output.textContent = output.textContent + buttonText;
        return;
    }

  
}
