const numProducto = document.getElementById('numProducto');
const nomProducto = document.getElementById('nomProducto');
const precioVenta = document.getElementById('precioVenta');
const precioCompra = document.getElementById('precioCompra');
const cantProducto = document.getElementById('cantProducto');
const medida = document.getElementById('medida');
const totalCompras = document.getElementById('totalCompras');
const totalVentas = document.getElementById('totalVentas');
const ganancia = document.getElementById('ganancia');
const calcularBtn = document.getElementById('calcularBtn');


const calcularGanancia = ()=>{
    let _precioCompra = precioCompra.value;
    let _cantProducto = cantProducto.value;
    let _totalCompra = _precioCompra * _cantProducto;

    let _precioVenta = precioVenta.value;
    let _totalVenta = _precioVenta * _cantProducto;

    let _ganancia = _totalVenta - _totalCompra;

    totalCompras.value = _totalCompra;
    totalVentas.value = _totalVenta;
    ganancia.value = _ganancia;
}

calcularBtn.addEventListener('click',calcularGanancia);