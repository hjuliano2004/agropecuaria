import { root, router } from "../../script.js";
import { navigate } from "../utils/Router.js";
import { numero } from "../utils/whatsapp.js";

let anoAtual = document.getElementById("ano-atual");
export let section_home = document.getElementById("home");
export let contato = document.getElementById("contato");
export let iconeCarrinho = document.getElementById("icone-carrinho-home");

    iconeCarrinho.addEventListener("click", ()=>{
        navigate(router, "/#carrinho")
    })

    contato.addEventListener("click", () => {
        window.open(`https://api.whatsapp.com/send?phone=${numero}&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.`, "_blank");
    });


export function home() {

    anoAtual.textContent = new Date().getFullYear();
    section_home.style.display = "block";
    root.style.display = "none";
}
