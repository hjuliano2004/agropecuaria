import { root, router, superior1, superior2 } from "../../script.js";
import { carrinhoList, setRetirada } from "../models/Carrinho.js";
import { cliente, comentario, saveCliente, saveComentario } from "../models/cliente.js";
import { save } from "../models/racoes.js";
import { adotar, dom } from "../utils/adotar.js";
import { btn_retorno } from "../utils/Retorno.js";
import { navigate } from "../utils/Router.js";
import { formatCoins } from "../utils/utils.js";

function opcoes() {

    const acressimo = 10;

    const section = dom("section", "", {id: "sect_metodo"});
    const div = adotar(dom("div", "", { id: "nome-usuario" }), [dom("label", "Nome: ")])

    const input = dom("input", "", { type: "text", placeholder: "seu nome", value: cliente });
    const label2 = dom("label", "Observações: ", {for: "observacoes"})
    const input2 = dom("input", "", {type: "text", placeholder: "comente sobre o pedido(não obrigatório)",id: "observacoes", value: comentario})

    input.addEventListener("input", () => {
        saveCliente(input.value);
        input.style.border = "";
    })

    input2.addEventListener("input", ()=>{
        saveComentario(input2.value)
    })

    const div2 = dom("div", "", { id: "retirada" })


    const card = cards("Pessoalmente", "retirar pessoalmente");
    const card2 = cards("Entrega", "entrega de encomenda", acressimo);

    card.addEventListener("click", () => {

        if (input.value.trim().length < 2) {
            input.style.border = "1px solid red";
            return null;
        }

        setRetirada({ metodo: "Pessoalmente", acressimo: 0 })
        navigate(router, "/#pagamento");

        save()
    })

    card2.addEventListener("click", () => {
        if (input.value.trim().length.length < 2) {
            input.style.border = "1px solid red";
            return null;
        }
        setRetirada({ metodo: "Entrega", acressimo: acressimo });
        navigate(router, "/#endereco")
        save();
    })

    adotar(div, [input, adotar(dom("div"), [label2, input2])])
    adotar(div2, [div, card, card2]);
    adotar(section, [div, div2]);
    return section;

}



function cards(titulo, mensagem, acressimo = 0) {

    const card = dom("div", "", { class: "card-retirada" });

    const h3 = dom("h3", titulo);
    const p = dom("p", mensagem);
    const span = dom("span", `R$${formatCoins(acressimo)}`, { class: "preco" });

    adotar(card, [h3, p, span])


    return card;
}

export function retirada() {

    root.style.display = "block";
    adotar(superior1, [btn_retorno("/#carrinho")]);
    adotar(superior2, [dom("h3", "Método de retirada")]);

    let vazio = true;

    for(let i=0;i<carrinhoList.length;i++){
        if(carrinhoList[i]){
            if(carrinhoList[i].quantidade > 0){
                vazio = false;
            }
        }
    }

    if(vazio){
        navigate(router, "/#carrinho");
        return null;
    }

    adotar(root, [ opcoes()]);
}