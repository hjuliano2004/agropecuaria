import { inferior } from "../../script.js";
import { adotar, dom } from "../utils/adotar.js";
import { Proximo } from "../utils/proximo.js";

export const divInferior = dom("div", "", {id: "cont-inferior"}, true);

export const preco = dom("p", "ddd", {class: "preco", id: "preco_inferior"}, true);
export const direita = dom("div", "", {class: "inferior_direito"}, true);

export function setInferior(){

    let btn = Proximo("/#carrinho");


    adotar(divInferior, [preco, direita]);
    adotar(direita, [btn]);
    adotar(inferior, [divInferior]);
}