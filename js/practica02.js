const calcularBtn = document.getElementById('calcularBtn');
const limpiarBtn = document.getElementById('limpiarBtn');
const numeroSelect = document.getElementById('numero');
const resultado = document.getElementById('resultadoTxt');

const calcular = ()=>{
    let num = numeroSelect.value;

    if(isNaN(num)){
        console.warn('Eliga un numero');
        return;
    }

    let res = '';
    for(i=1;i<11;i++){
        res += `${num} x ${i} = ${num*i} <br>`;
    }
    
    resultado.innerHTML = res;
    
}

const limpiar = ()=>{
    resultado.innerHTML = '';
}


calcularBtn.addEventListener('click',calcular);
limpiarBtn.addEventListener('click',limpiar);