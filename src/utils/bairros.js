import { dom } from "./adotar.js";
import { saveBairro } from "../models/endereco.js";

const bairros = [
    "Aventureiro", "Boa Vista", "Bom Retiro", "Bucarein",
    "Espinheiros", "Iririú","Jardim Paraíso", "Jarivatuba"];

export function geraBairros(){
    let lista = [];

    for(let i=0;i<bairros.length;i++){
        let option = dom("option", bairros[i], {value: bairros[i]})
        lista.push(option);
    }

    return lista;
}

export function bairroExiste(bairro){

    for(let i=0;i<bairros.length;i++){
        if(bairro == bairros[i]){
            return true;
        }
    }

    return false;
}