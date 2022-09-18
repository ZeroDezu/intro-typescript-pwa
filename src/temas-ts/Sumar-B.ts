export class Pa {
    private base: number;
    private multi: number;
    private total:number

    setBase(a: number) {
        this.base=0;
            this.base = a;
    }

    setMulti(b: number) {
        this.multi=0;
            this.multi = b
    }

    resultado() {
            this.calculo();
    }

    private calculo() {
            this.total=0;
            for (let i=0;i < this.multi;i++){
                    this.total+=this.base
                    console.log("numero de veces: " + (this.total-this.base)+"= "+this.total);
            }

            this.imprimir();   
    }
    imprimir(){
            console.log("El resultado es: "+this.total)
    }
}