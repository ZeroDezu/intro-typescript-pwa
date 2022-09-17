interface Alumno3{
        nombre:string,
        edad:number,
        direccion:()=>void;
}

const AlumnosUTL:Alumno3={
        nombre:'Mario',
        edad:23,
        direccion:{
                calle:'Veracruz',
                pais:'MX',
                stado:'GTO'
        }
}

function mostratDireccion(){
        return nombre +', '+direccion.estado+', '+direccion.pais;
}

const direccion = AlumnosUTL.mostratDireccion();
console.log(direccion);