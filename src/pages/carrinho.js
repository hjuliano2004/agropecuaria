import { display, root, router, superior1, superior2, superior3 } from "../../script.js";
import { carrinhoList } from "../models/Carrinho.js";
import { dom, adotar } from "../utils/adotar.js";
import { itemLista } from "../utils/lista.js";
import { btn_retorno } from "../utils/Retorno.js";
import { navigate } from "../utils/Router.js";
import { setInferior } from "./inferior.js";

function modulo() {

    const section = dom("section", "", { id: "carrinho" });

    let ul = dom("ul", "", {class: "lista"});

    let cheio = false;

    for(let i =0;i<carrinhoList.length;i++){
        if(carrinhoList[i].quantidade){
            ul.appendChild(itemLista(carrinhoList[i]));
            cheio = true;
        }
    }

    if(!cheio){
        adotar(ul, [dom("spam", "Você ainda não escolheu nada.", {id: "carrinho-vazio"})]);
    }


    return adotar(section, [ul]);
}


export function carrinho() {

    root.style.display = "block";
    adotar(superior1, [btn_retorno("/")]);
    adotar(superior2, [dom("h3", "Carrinho")]);
    //adotar(superior3, [dom("p", "endereço")]);//TODO: espaço util no canto superior direito

    adotar(display, [modulo()]);
    
    console.log(root.style.display)

    setInferior(()=>{

        for(let i =0;i<carrinhoList.length;i++){
            if(carrinhoList[i].quantidade){
                navigate(router, "/#retirada");
                return null;
            }
        }

        alert("Você ainda não escolheu nada.");
    });
}

export function btn_carrinho() {
    let btn = dom("button");
    btn.setAttribute("class", "icone-carrinho");

    btn.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg"
         fill="currentColor" class="bi bi-cart"
         viewBox="0 0 16 16">
      <path fill-rule="evenodd"
        d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
    </svg>`;

    btn.addEventListener("click", () => {
        navigate(router, "/#carrinho");
    });

    return btn;
}
