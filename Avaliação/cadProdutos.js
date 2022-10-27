const produtosAlimentos = [
    {
        categoria: 'Alimentos',
        id: "1",
        nome:'Leite',
        descricao: 'UHT Integral 1L',
        preco: 5.3,
        estoque: 2

    },
    {
        categoria: 'Alimentos',
        id: "2",
        nome:'Arroz',
        descricao: 'Branco Tipo 1 5kG',
        preco: 20.89,
        estoque: 13

    },
    {
        categoria: 'Alimentos',
        id: "3",
        nome:'Carne',
        descricao: 'Picanha bovina 1Kg',
        preco: 109.95,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "4",
        nome:'Beterraba',
        descricao: '1kG',
        preco: 4.23,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "5",
        nome:'Panetone',
        descricao: 'Com frutas cristalizadas',
        preco: 20.25,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "6",
        nome:'Cerveja',
        descricao: 'Duplo Malte 350ml',
        preco: 3.59,
        estoque: 10
        
    },
    {
        categoria: 'Alimentos',
        id: "7",
        nome:'Pão de forma',
        descricao: '500g',
        preco: 9.79,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "8",
        nome:'Refrigerante de laranja',
        descricao: '2L',
        preco: 9.29,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "9",
        nome:'Agua',
        descricao: 'Sem gás 1L',
        preco: 2.36,
        estoque: 10

    },
    {
        categoria: 'Alimentos',
        id: "10",
        nome:'Café',
        descricao: 'Extra Forte 500g',
        preco: 15.28,
        estoque: 10

    }
]

const produtosFerramentas = [
    {
        categoria: 'Ferramentas',
        id: "1",
        nome:'Furadeira',
        descricao: '12V sem fio',
        preco: 189,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "2",
        nome:'Detector de metais',
        descricao: 'A prova de Agua',
        preco: 316,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "3",
        nome:'Lavadora',
        descricao: 'Alta Pressão',
        preco: 599,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "4",
        nome:'Ferro de Solda',
        descricao: '110V 40W',
        preco: 119,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "5",
        nome:'Alicate',
        descricao: 'Corte Diagonal 6.1/2',
        preco: 36.36,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "6",
        nome:'Jogo de chaves',
        descricao: 'Boca estrela 6 a 22mm',
        preco: 58.63,
        estoque: 10
        
    },
    {
        categoria: 'Ferramentas',
        id: "7",
        nome:'Estilete',
        descricao: 'Emborrachado',
        preco: 26.65,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "8",
        nome:'Chave de roda',
        descricao: 'Universão Cruz',
        preco: 42.8,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "9",
        nome:'Macaco hidraúlico',
        descricao: 'Capacidade 2T',
        preco: 159.47,
        estoque: 10

    },
    {
        categoria: 'Ferramentas',
        id: "10",
        nome:'Escada',
        descricao: 'Aluminio 6 degraus',
        preco: 174.25,
        estoque: 10

    }
]
const produtosEletronicos = [
    {
        categoria: 'Eletronicos',
        id: "1",
        nome:'Televisão',
        descricao: '60 polegadas',
        preco: 3500,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "2",
        nome:'Relógio',
        descricao: 'SmartWatch',
        preco: 1500,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "3",
        nome:'Fone',
        descricao: 'Bluetooth',
        preco: 400,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "4",
        nome:'Celular',
        descricao: '7 Polegada 128Gb',
        preco: 119,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "5",
        nome:'Camera Fotografica',
        descricao: 'Profissional ',
        preco: 600,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "6",
        nome:'Camera de Segurança',
        descricao: 'Resolução 4K',
        preco: 753,
        estoque: 10
        
    },
    {
        categoria: 'Eletronicos',
        id: "7",
        nome:'WebCam',
        descricao: 'Resolução full HD',
        preco: 154.20,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "8",
        nome:'Caixa de Som',
        descricao: 'Bluetooth 300W',
        preco: 421,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "9",
        nome:'Console Video Game',
        descricao: '300 Jogos inclusos',
        preco: 267.51,
        estoque: 10

    },
    {
        categoria: 'Eletronicos',
        id: "10",
        nome:'Impressora',
        descricao: 'Impressão a Laser',
        preco: 754.85,
        estoque: 10

    }
]


window.localStorage.setItem('Alimentos',JSON.stringify(produtosAlimentos))
window.localStorage.setItem('Ferramentas',JSON.stringify(produtosFerramentas))
window.localStorage.setItem('Eletronicos',JSON.stringify(produtosEletronicos))