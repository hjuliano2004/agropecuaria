import { chavePix } from "./chave.js";
import { espera } from "./horas.js";
import { formatCoins } from "./utils.js";
import { cliente, comentario } from "../models/cliente.js";
import { carrinhoList, metodo_retirada } from "../models/Carrinho.js";
import { endereco } from "../models/endereco.js";

//export const numero = "5547996595712";
export const numero = "5547997779964";

function whatsapp(mensagem = null) {

    if (!mensagem) {
        window.alert("mensagem não encontrada");
        return 0
    }

    let url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;

    try {
        window.location.href = url;
        return true;
    } catch {
        window.alert("Não foi possível abrir o WhatsApp. Tente novamente.");
        return false;
    }

}

function mensagemBase() {

    //console.clear();

    let msg = `
Novo pedido

Pizzas: ${"lista de pizzas"}

------------------------------------------------
CLIENTE: ${cliente}
Forma de retirada: ${"nada"}`

    return msg;
}

export function mensagem() {
    let msg = `
${mensagemBase()}
${entrega()}
${total()}
${pix()}
    
Observações: ${comentario}
Resumo: ${carrinhoList.length}`;


    //whatsapp(msg);

    return msg;
}


function entrega() {

    if(!metodo_retirada){
        console.log("metodo_retirada não definido");
        return null;
    }

    if (metodo_retirada.metodo.toUpperCase() === "PESSOALMENTE") {
        return `Horário previsto para retirada: ${espera(30)}`;
    }

    return `Taxa de entrega: R$${formatCoins(metodo_retirada.acressimo)}
Horário previsto para entrega: ${espera(40)}

Endereço:
    Rua: ${endereco.rua} ${endereco.numero}
    Bairro: ${endereco.bairro}
    cep: ${endereco.cep}
    Complemento: ${endereco.complemento}`;
}

function total() {
    let string = `
------------------------------------------------
TOTAL: R$${formatCoins(5)}
Forma de pagamento: ${"pagamento"}`;//TODO: implementar forma de pagamento no carrinho

    return string;
}

function pix() {

    let obj = { pagamento: "PIX" }; //TODO: implementar forma de pagamento no carrinho
    if (obj.pagamento.toUpperCase() === "PIX") {
        return `chave pix: ${chavePix}
beneficiário: Papadelli Ltda`;
    }

    return "";
}