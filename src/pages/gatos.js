import { display, router } from "../../script.js";
import { racaoGato } from "../models/racoes.js";
import { adotar, dom } from "../utils/adotar.js";
import { itemLista } from "../utils/lista.js";
import { navigate } from "../utils/Router.js";
import { setupPaginas } from "../utils/utils.js";

export let cardGatos = document.getElementById("gatos");

cardGatos.addEventListener("click", () => {
    navigate(router, "/#gatos");
});


function modulo(list, id) {
    const section = dom("section", "", { id: id });

    const ul = dom("ul", "", { class: "lista" });


    for (let i = 0; i < list.length; i++) {
        let obj = list[i];
        ul.appendChild(itemLista(obj));
    }

    return adotar(section, [ul]);
}




export function gatos() {
    setupPaginas("Ração para gatos");

    adotar(display, [modulo(racaoGato, "gatos")]);
}