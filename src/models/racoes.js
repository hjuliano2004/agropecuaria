const racaoCachorroPadrao = [
    {
        marca: "Bocão Original",
        tipo: "Adulto",
        peso: "7kg",
        preco: 59.90,
        img: "../imagens/bocao-original.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Original",
        tipo: "Adulto",
        peso: "15kg",
        preco: 109.90,
        img: "../imagens/bocao-original.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Original",
        tipo: "Adulto",
        peso: "25kg",
        preco: 169.90,
        img: "../imagens/bocao-original.webp",
        quantidade: 0
    },
    {
        marca: "Bocão",
        tipo: "Filhote",
        peso: "20kg",
        preco: 149.90,
        img: "../imagens/bocao-filhotes.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Original",
        tipo: "Filhote",
        peso: "7kg",
        preco: 69.90,
        img: "../imagens/bocao-filhotes.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Premium",
        tipo: "Adulto",
        peso: "10kg",
        preco: 119.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Premium",
        tipo: "Adulto",
        peso: "25kg",
        preco: 239.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Premium",
        tipo: "Raças Pequenas",
        peso: "10kg",
        preco: 129.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Premium",
        tipo: "Raças Pequenas",
        peso: "20kg",
        preco: 229.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Bocão Premium",
        tipo: "Signature",
        peso: "7kg",
        preco: 139.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Adulto",
        peso: "7kg",
        preco: 64.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Adulto",
        peso: "15kg",
        preco: 119.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Adulto",
        peso: "25kg",
        preco: 184.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Filhote",
        peso: "7kg",
        preco: 74.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Filhote",
        peso: "15kg",
        preco: 129.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Raças Pequenas",
        peso: "15kg",
        preco: 139.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    },
    {
        marca: "Palatto Tradicional",
        tipo: "Classic",
        peso: "7kg",
        preco: 54.90,
        img: "../imagens/bocao-premium-caes-adultos.webp",
        quantidade: 0
    }
];

const racaoGatoPadrao = [{
    marca: "Bocão Premium",
    tipo: "Gato Adulto",
    peso: "10kg",
    preco: 139.90,
    img: "../imagens/bocao-gatos-adultos.webp",
    quantidade: 0
},

{
    marca: "Bocão Premium",
    tipo: "Gato Adulto",
    peso: "20kg",
    preco: 259.90,
    img: "../imagens/bocao-gatos-adultos.webp",
    quantidade: 0
},
{
    marca: "Bocão Premium",
    tipo: "Gato Castrado",
    peso: "10kg",
    preco: 149.90,
    img: "../imagens/bocao-gatos-adultos.webp",
    quantidade: 0
},
];


export let racaoCachorro = [];
export let racaoGato = [];

let rc = "racaoCachorro"
let rg = "racaoGato"


load();

export function load() {

    let racaoC = JSON.parse(localStorage.getItem(rc));
    let racaoG = JSON.parse(localStorage.getItem(rg));


    if (racaoC.length) {
        racaoCachorro = racaoC;
    }

    if(racaoG.length){
        racaoGato = racaoG
    }


    if(racaoC.length < racaoCachorroPadrao.length){
        racaoCachorro = racaoCachorroPadrao;
    }

    if(racaoG.length < racaoGatoPadrao.length){
        racaoGato = racaoGatoPadrao;
    }
}


export function save() {

    localStorage.setItem(rc, JSON.stringify(racaoCachorro));
    localStorage.setItem(rg, JSON.stringify(racaoGato));
}




