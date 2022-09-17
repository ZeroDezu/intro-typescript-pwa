//manejo de funciones

function sumar(a:number,b:number,c:number=0):void{
        console.log(a+b+c)
}

console.log(sumar(2,2,2))

function multiplicar(numero:number, otronumero:number, base:number):number{
        return numero*base;
}

const resultado = multiplicar(5,8,4);
console.log(resultado);

interface Alumno2{
        nombre:string,
        edad:number,
        nuestraedad:()=>void;
}

function cursar(alumno:Alumno2, nuevaedad:number):void{
        alumno.edad += nuevaedad;
        console.log(alumno);
}

const nuevoAlumno:Alumno2={
        nombre:'Jose',
        edad: 23,
        nuestraedad(){
                console.log('Eda dealumno: ', this.edad);
        }
}

console.log(nuevoAlumno,28)