import { Router } from "./src/utils/Router.js"
import { home, section_home } from "./src/pages/home.js"
import { limpar } from "./src/utils/adotar.js";
import { carrinho } from "./src/pages/carrinho.js";
import { caes, cardCaes } from "./src/pages/caes.js";
import { retirada } from "./src/pages/retirada.js";
 


export const root = document.getElementById("root");
export const superior = document.getElementById("superior");
export const display = document.getElementById("display");
export const inferior = document.getElementById("inferior");

export const superior1 = document.getElementById("superior1");
export const superior2 = document.getElementById("superior2");
export const superior3 = document.getElementById("superior3");


// Define quais elementos ficam visíveis em cada rota
const routes = {
    "/": () => showElements([home]),
    "/#carrinho": () => showElements([carrinho]),
    "/#caes": () => showElements([caes]),
    "/#retirada": () => showElements([retirada]),
};

export const router = new Router(routes);

// Função que controla visibilidade de múltiplos elementos
function showElements(ids) {

    limpar();
    section_home.style.display = "none";

    for (let i = 0; i < ids.length; i++) {
        ids[i]();
    }
}