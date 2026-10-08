import { display, router } from "../../script.js";
import { racaoPesada } from "../models/racoes.js";
import { adotar, dom } from "../utils/adotar.js";
import { itemLista } from "../utils/lista.js";
import { navigate } from "../utils/Router.js";
import { setupPaginas } from "../utils/utils.js";

export const cardPesada = document.getElementById("pesada");

cardPesada.addEventListener("click", () => {
    navigate(router, "/#pesada");
});

function modulo(list, id) {
    const section = dom("section", "", { id });
    const ul = dom("ul", "", { class: "lista" });

    for (const item of list) {
        ul.appendChild(itemLista(item));
    }

    return adotar(section, [ul]);
}

export function pesada() {
    setupPaginas("Ração pesada");
    adotar(display, [modulo(racaoPesada, "pesada")]);
}