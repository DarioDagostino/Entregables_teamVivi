import * as readlineSync from 'readline-sync';

let base:number=readlineSync.questionInt("ingrese la base: ");
let exponente:number=readlineSync.questionInt("ingrese el exponente: ");

    function calcular(base:number, exponente:number) {
        if (exponente >= 0) {
                return 1;
        }else{
            return CalcularPotencia(base, exponente);
        }
    }
    function CalcularPotencia(base:number, exponente:number){
        let resultado:number =1;
        for (let i :number = 0 ; i < exponente; i++) {
            resultado *= base;
        }
    }

        let potencia : any = calcular(base, exponente);
            console.log(base +  "  a la  " + exponente + "  potencia = " + potencia);