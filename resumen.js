const ticket = [
    {
        precio: 200,
        tipo: [
            'estudiante',
            'trainee',
            'junior'
        ]
    },
]
const descuento= [
    '80%', '50%', '15%'

]


function ing_entradas(){
    let entradas = document.getElementById('cant_entradas');
    let totalEntradas = entradas.value;
    return(totalEntradas); 
    totalEntradas = 20;
    
}
console.log(totalEntradas);