const tablebody = document.getElementById('tableBody');
const promedio = document.getElementById('promedio');

let presionTotal = 0;
let dias = 0;

const inicializar = async()=> {

    await fetch('../js/presion.json')
    .then(respuesta => respuesta.json())
    .then( datos => {
        datos.forEach( dato =>{
        const fila = document.createElement('tr');
        
        const celdaNombre = document.createElement('td');
        celdaNombre.innerText = dato.nombre;
        fila.appendChild(celdaNombre);
        
        const celdaDia = document.createElement('td');
        celdaDia.innerText = dato.dia;
        fila.appendChild(celdaDia);
        
        const celdaPresion = document.createElement('td');
        celdaPresion.innerText = dato.presion_arteria;
        fila.appendChild(celdaPresion);
        
        presionTotal += parseFloat(dato.presion_arteria);
        
        dias++;
        
        
        tablebody.appendChild(fila);
    });
    })
    
    let presionPromedio = presionTotal / dias;
    let estado = "";

    if(presionPromedio < 120){
        estado = 'Normal';
    }else if(presionPromedio < 130){
        estado = 'Elevada'
    }else{
        estado = 'Alta';
    }

    promedio.innerText = `Promedio de presion arterial ${presionPromedio}
    El estado de su presion arterial es ${estado}
    `;
    
}
    
    
document.addEventListener('DOMContentLoaded',inicializar);
