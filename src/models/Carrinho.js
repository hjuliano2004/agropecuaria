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


export let metodo_retirada = loadRetirada();

export function setRetirada(set){
    metodo_retirada = set;
    
    localStorage.setItem("metodo_retirada", JSON.stringify(metodo_retirada));
}

function loadRetirada() {

    let obj = localStorage.getItem("metodo_retirada");

    if(!obj){
        return null;
    }

    return JSON.parse(obj);

}


export function zeraCarrinho() {
    localStorage.removeItem("carrinho");

    for (let i = 0; i < carrinhoList.length; i++) {
        carrinhoList[i].quantidade = 0;
    }
}