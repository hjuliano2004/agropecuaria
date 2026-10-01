import { router } from "../../script.js";
import { dom } from "./adotar.js";
import { navigate } from "./Router.js";

export function Proximo(callback = ()=>{
    console.log("vc não passou uma função de callback para o botão próximo");
}){
    let btn = dom("button", "PRÓXIMO", {class: "btn_proximo"});

    btn.addEventListener("click", ()=>{
        callback();
    });

    return btn
}