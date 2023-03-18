dugme = document.querySelector(".btn");
inp = document.querySelector(".inp");
lista = document.querySelector(".list");
checkIt = document.querySelectorAll("#stisni")
dugme.addEventListener("click" ,() =>{
    if(inp.value==""){
        alert("Unesite vrednost");
    }
    else{
        
    let text = document.createElement("p");
    text.innerText =  inp.value;
    inp.value ="";
    text.addEventListener("click", ()=>{
        text.style.textDecoration ="line-through";
        });
        lista.appendChild(text);
        lista.type = "checkbox";
    }
});