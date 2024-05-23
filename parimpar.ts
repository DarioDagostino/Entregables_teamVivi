import * as rls from 'readline-sync';

let numeroIngresado : number = rls.questionInt("ingresar numero: ");

    if(numeroIngresado ==0){
        console.log("El numero ingresado es Cero" + numeroIngresado)
    }else if(numeroIngresado % 2 == 0){
        console.log("El numero ingresado es Par" + numeroIngresado)
    }else{
        console.log("El numero ingresado es Impar" + numeroIngresado)
    }