import { display, root, router, superior1, superior2, superior3 } from "../../script.js";
import { racaoCachorro } from "../models/racoes.js";
import { adotar, dom } from "../utils/adotar.js";
import { itemLista } from "../utils/lista.js";
import { btn_retorno } from "../utils/Retorno.js";
import { navigate } from "../utils/Router.js";
import { setupPaginas } from "../utils/utils.js";
import { btn_carrinho } from "./carrinho.js";
import { setInferior } from "./inferior.js";

export let cardCaes = document.getElementById("caes");

cardCaes.addEventListener("click", () => {
    navigate(router, "/#caes");
});

export function caes() {
    setupPaginas("Ração para cães");

    adotar(display, [modulo(racaoCachorro)]);
}


function modulo(list, id) {
    const section = dom("section", "", { id: id });

    const ul = dom("ul", "", { class: "lista" });


    for (let i = 0; i < list.length; i++) {
        let obj = list[i];
        ul.appendChild(itemLista(obj));
    }

    return adotar(section, [ul]);
}

