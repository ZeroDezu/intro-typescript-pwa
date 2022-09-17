interface Detalles{
        autor:string,
        year:number
}

interface Reproductor{
        volumen:number,
        segundo:number,
        cancion:string,
        detalles:Detalles;
}

const reproductor:Reproductor={
        volumen:90,
        segundo:66,
        cancion:'Mañanitas',
        detalles:{
                autor:'Cepillin',
                year:1999
        }
}

const {volumen,segundo,cancion,detalles}=reproductor

const {autor}=detalles

console.log(`El volumen actual es : ${reproductor.volumen}`);
console.log(`El segundo actual es : ${reproductor.segundo}`);
console.log(`El cancion actual es : ${reproductor.cancion}`);
console.log(`El autor actual es : ${reproductor.detalles.autor}`);

//arreglos

const dbz:string []=['Goku','Vegueta','Yamcha','Trunks'];

console.log('Personaje 1: ', dbz[0]);
console.log('Personaje 2: ', dbz[1]);
console.log('Personaje 3: ', dbz[2]);
console.log('Personaje 4: ', dbz[3]);

const [p1,p2,p3,p4]=dbz

console.log('Personaje 1: ', p1);
console.log('Personaje 2: ', p2);
console.log('Personaje 3: ', p3);
console.log('Personaje 4: ', p4);
