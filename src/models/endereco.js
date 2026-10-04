export let endereco = load();

    function load() {
        let endereco = JSON.parse(localStorage.getItem("endereco"));

        if (!endereco) {
            return {
                rua: "",
                numero: "",
                bairro: "",
                cep: "",
                complemento: ""
            }
        }

        return endereco;
    }

    export function salveEndereco(rua, bairro, cep, numero = null, complemento = "") {

        endereco.numero = numero;
        endereco.complemento = complemento;
        endereco.rua = rua;
        endereco.bairro = bairro;
        endereco.cep = cep;

        localStorage.setItem("endereco", JSON.stringify(endereco));
    }

    export function savePorCep(rua, bairro, cep) {
        endereco.rua = rua;
        endereco.bairro = bairro;
        endereco.cep = cep;

        localStorage.setItem("endereco", JSON.stringify(endereco));
    }


    export function saveBairro(bairro){
        endereco.bairro = bairro;

        localStorage.setItem("endereco", JSON.stringify(endereco));
    }


    export function limpaEndereco(){
        localStorage.removeItem("endereco")
    }


        /**        if(rua){endereco.rua = rua;}
        if(bairro){endereco.bairro = bairro;}
        if(cep){endereco.cep = cep;}
        if(numero > 0){endereco.numero = numero}
        if(complemento){endereco.complemento = complemento}
 */