import { racaoCachorro, racaoGato } from "./racoes.js";

export const carrinhoList = loadCarrinho([racaoCachorro, racaoGato]);

function loadCarrinho(lista = []) {//deve receber uma lista de arrays de ração


    let array = [];

    for(let i=0;i<lista.length;i++){
        for(let j=0;j<lista[i].length;j++){
            array.push(lista[i][j]);
        }
    }

    return array;
}


export let retirada = null;

export function setRetirada(set){
    retirada = set;

    console.log(retirada)
}