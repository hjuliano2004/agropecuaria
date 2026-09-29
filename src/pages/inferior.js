import { inferior } from "../../script.js";
import { carrinhoList } from "../models/Carrinho.js";
import { adotar, dom } from "../utils/adotar.js";
import { Proximo } from "../utils/proximo.js";
import { formatCoins } from "../utils/utils.js";

export const divInferior = dom("div", "", {id: "cont-inferior"}, true);

export const preco = dom("p", `R$${formatCoins(0)}`, {class: "preco", id: "preco_inferior"}, true);
export const direita = dom("div", "", {class: "inferior_direito"}, true);

export function setInferior(){

    let btn = Proximo("/#carrinho");


    adotar(divInferior, [preco, direita]);
    adotar(direita, [btn]);
    adotar(inferior, [divInferior]);

    attPreco();
}


export function attPreco(){

    let v = 0;

    for(let i=0;i<carrinhoList.length;i++){
        v += carrinhoList[i].preco;

        console.log(carrinhoList[i].preco);
    }

    console.log(`\n\n\n${v}`);

    preco.innerText = `$${formatCoins(5.5)}`;
}