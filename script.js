//Armazenagem dos dígitos
const digitos = [... document.querySelectorAll(".dig")];
const digitosOperacionais = [... document.querySelectorAll(".operator")]
const digitosFuncionais = [... document.querySelectorAll(".fun")]

//Display
const display = document.querySelector(".display");

//Armazenagem dos valores digitados
let valores = [];

// Implementando lógica nos digítos tradicionais
digitos.map(el=>{
    el.addEventListener("click",function(evt){
        
        if (evt.target.textContent === '.' && valores[valores.length - 1] === '.') {
            return
        }
        valores.push(evt.target.textContent);
        display.textContent = valores.join("")
        
    });
});

// Implementando lógica nos digítos funcionais
digitosFuncionais.map(el=>{
    el.addEventListener("click",(evt)=>{
        if (evt.target.textContent =='CE'){
            display.textContent='';
            valores = [];
        }else{
            valores.pop();
            display.textContent = valores.join("");
        }
    });
});

// Operações
digitosOperacionais.map((el) => {
    el.addEventListener("click", function(evt) {
        // Se o ultimo valor do array for sinal e o usuario clicou em outro, substitui
        if (['*','-','+','/'].includes(valores[valores.length -1])){
            if (valores.length==1 && valores[valores.length -1] == "-"){
                return

            }else{
                valores[valores.length -1] = evt.target.textContent;
            }
        
        // se . for o ultimo valor do array retorna
        }else if(valores[valores.length -1] =='.'){
            return
        
        // metodo para apenas conseguir enserir o sinal de menos no inicio
        }else if (valores.length == 0 && evt.target.textContent!="-"){
            return 
            
        }else{
            valores.push(evt.target.textContent);
        }

        if (evt.target.textContent=='='){
            valores = [eval(display.textContent)]
        }
        display.textContent = valores.join("");
    });
});