import { router } from "../../script.js";
import { dom } from "./adotar.js";
import { navigate } from "./Router.js";

export function Proximo(url){
    let btn = dom("button", "PRÓXIMO", {class: "btn_proximo"});

    btn.addEventListener("click", ()=>{
        navigate(router, url);
    });

    return btn
}