

let nombres:string[]=['mario','dario','juan']

console.log(nombres);

let datos:(boolean|number|string)[]=['Mario',23,true,'lopez']


console.log(datos);

datos.push(200);
datos.push('Maria');
datos.push(false);

console.log(datos);
//------------------------------------
//otros forma de crear arreglos
let arreglo: Array<number>=[1,2,3,4]

const nombre:string='datos1';

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string
    materias?:string[]
}

const alumno: Alumno={
    matricula:'jfb313',
    nombre:'Jose',
    edad:23,
    email:'gmail.com',
    materias:['Ingles']
};

alumno.nombre='Jose2'

console.log(alumno)