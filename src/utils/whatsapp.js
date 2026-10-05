import { chavePix } from "./chave.js";
import { espera } from "./horas.js";
import { formatCoins } from "./utils.js";
import { cliente, comentario } from "../models/cliente.js";
import { carrinhoList, metodo_retirada } from "../models/Carrinho.js";
import { endereco } from "../models/endereco.js";

export const numero = "5547996595712";
//export const numero = "5547997779964";

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

        if(!metodo_retirada){
        console.log("metodo_retirada não definido");
        return null;
    }

    let msg = `
Novo pedido
Lista de rações: \n${itens()}

------------------------------------------------
CLIENTE: ${cliente}
Forma de retirada: ${metodo_retirada.metodo.toUpperCase()}`;

    return msg;
}

export function mensagem(metodo) {
    let msg = `
${mensagemBase()}
${entrega()}
${total(metodo)}
${pix(metodo)}
    
Observações: ${comentario}`;


    whatsapp(msg);

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

function calculaTotal() {//percorre carrinho list e soma o preço de cada item multiplicado pela quantidade
    let total = 0;

    for (let i = 0; i < carrinhoList.length; i++) {
        total += carrinhoList[i].preco * carrinhoList[i].quantidade;
    }

    if (metodo_retirada) {
        total += metodo_retirada.acressimo;//adicionando o acressimo do metodo de retirada caso seja entrega
    }

    return total;
}

function total(metodo) {
    let string = `
------------------------------------------------
TOTAL: R$${formatCoins(calculaTotal())}
Forma de pagamento: ${metodo}`;

    return string;
}

function pix(metodo) {

    if (metodo.toUpperCase() === "PIX") {
        return `chave pix: ${chavePix}
beneficiário: Timbé Exemplo Agropecuária Ltda`;
    }

    return "";
}

function item(obj){//gera string descritiva de um item do carrinho
return `
Marca: ${obj.marca}
Tipo: ${obj.tipo}
Peso: ${obj.peso}
Preço: R$${formatCoins(obj.preco)}
Quantidade: ${obj.quantidade}
Subtotal: R$${formatCoins(obj.preco * obj.quantidade)}`;    

}

function itens(){//gera string descritiva de todos os itens do carrinhoList
    let string = "";
    for(let i=0;i<carrinhoList.length;i++){
        if(carrinhoList[i].quantidade > 0){
            string += item(carrinhoList[i]) + "\n";
        }
    }
    return string;
}  