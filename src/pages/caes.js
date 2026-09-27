import { display, root, router, superior1, superior2, superior3 } from "../../script.js";
import { racaoCachorro } from "../models/racoes.js";
import { adotar, dom } from "../utils/adotar.js";
import { itemLista } from "../utils/lista.js";
import { btn_retorno } from "../utils/Retorno.js";
import { navigate } from "../utils/Router.js";
import { btn_carrinho } from "./carrinho.js";

export let cardCaes = document.getElementById("caes");

cardCaes.addEventListener("click", () => {
    navigate(router, "/#caes");
});

export function caes(){
    root.style.display = "block";
    adotar(superior1, [btn_retorno("/")]);
    adotar(superior2, [dom("h3", "Ração para cães")]);
    adotar(superior3, [btn_carrinho()]);

    adotar(display, [modulo(racaoCachorro)]);
    
}


function modulo(list, id){
    const section = dom("section", "", {id: id});

    const ul = dom("ul", "", { class: "lista" });
    

    for(let i = 0; i<list.length;i++){
        let obj = list[i];
        ul.appendChild(itemLista(obj));
    }
    
    


    return adotar(section, [ul]);
}