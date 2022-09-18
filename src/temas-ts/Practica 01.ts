interface direccion{
        calle:string,
        pais:string,
        estado:string
}

interface Alumno3{
        nombre:string,
        edad:number,
        direccion:direccion;
        mostrartDireccion:()=>void;
}

const AlumnosUTL:Alumno3={
        nombre:'Mario',
        edad:23,
        direccion:{
                calle:'Veracruz',
                pais:'MX',
                estado:'GTO'
        },
        mostrartDireccion(){
                return (this.nombre +', '+this.direccion.estado+', '+this.direccion.pais+', '+this.direccion.calle+', '+this.edad);
        }
}

const direccion = AlumnosUTL.mostrartDireccion();
console.log(direccion);