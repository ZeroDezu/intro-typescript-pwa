import {calcularIva2,Producto} from "./05-desestructuracion de funciones"

const tiendaProductos:Producto[]=[
        {
                desc:'Telefono1',
                precio:13123
        },
        {
                desc:'Tablet1',
                precio:13123
        },
        {
                desc:'Telefono2',
                precio:13123
        }
]

const [total1,iva1]=calcularIva2(tiendaProductos);
console.log(`Total: ${total1} \n IVA: ${iva1}`)