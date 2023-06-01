
function ing_entradas() {
    return document.getElementById('cant_entradas').value;

}

function opciones() {
    let categoria = document.getElementById('categoria');
    let opciones = categoria.options[categoria.selectedIndex];

    return opciones.value;
}


function descuento() {
    let categoria = opciones();
    let porcentaje;
    switch (categoria) {
        case '1':
            porcentaje = 0.80;
            break;
        case '2':
            porcentaje = 0.50;
            break;
        case '3':
            porcentaje = 0.15;
            break;
    }
    let resultado = 1 - porcentaje;
    return Math.round(resultado * 100) / 100;
}

function importe() {
    const precio = 200;
    const cant = parseInt(ing_entradas());
    return cant * parseInt(precio);
}
function aplicarDescuento() {
    return importe() * descuento();
}

const resumen = () => {
    document.getElementById("resultado").innerHTML = `Total a pagar: $ ${aplicarDescuento()}`
}


function borrar(){
    document.getElementById("resultado").innerHTML = "";
    document.getElementById('cant_entradas').value= "";


}
   



