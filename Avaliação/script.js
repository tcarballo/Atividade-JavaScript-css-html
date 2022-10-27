var prodAlimentos = JSON.parse(window.localStorage.getItem('Alimentos'))
var prodFerramenta = JSON.parse(window.localStorage.getItem('Ferramentas'))
var prodEletronicos = JSON.parse(window.localStorage.getItem('Eletronicos'))

var carrinho = []
var mainProd = []

function sortearProdutos() {

    let idSort = []
    let randomNumber
    let tmp
    for (let i = 0; i < 10; i++) {
        idSort.push(i)
    }
    for (let i = idSort.length; i;) {
        randomNumber = Math.random() * i-- | 0
        tmp = idSort[randomNumber]

        idSort[randomNumber] = idSort[i]
        idSort[i] = tmp
    }

    for (let i = 0; i < 4; i++) {
        let num = idSort[i]
        mainProd.push(prodAlimentos[num])
        mainProd.push(prodFerramenta[num])
        mainProd.push(prodEletronicos[num])

    }
    mainProd.sort(function (a, b) {
        return a.categoria < b.categoria ? -1 : a.categoria > b.categoria ? 1 : 0;
    })
    showTable(mainProd)
}

function mainPage() {
    showTable(mainProd)
}

function mostrarSub() {
    let att = document.getElementById("subMenu").getAttribute("style")
    if (att == 'display: none;') {
        document.getElementById("subMenu").setAttribute("style", "display: block;")
    } else {
        document.getElementById("subMenu").setAttribute("style", "display: none;")
    }
}


function showTable(prod) {
    var txt = ''
    for (let i = 0; i < prod.length; i++) {

        txt += `<tr>
                        <th scope="row" class="border">${i + 1}</th>
                        <th scope="row" class="border">${prod[i].categoria}</th>
                        <td class="border">${prod[i].nome}</td>
                        <td class="border">${prod[i].descricao}</td>
                        <td class="border">${prod[i].estoque}</td>
                        <td class="border">R$ ${prod[i].preco}</td>                       
                        <td class="border"><a style="text-decoration:underline ;" onclick="addCarrinho('${prod[i].categoria}',${prod[i].id})" >Add Carrinho</a></td> 
                    </tr>`
    }
    document.getElementById('mainTable').innerHTML = txt
}

function showTableCar() {
    var txt = ''
    for (let i = 0; i < carrinho.length; i++) {
        let valorTotal = carrinho[i].quantidade * carrinho[i].preco
        txt += `<tr>
                        <th scope="row" class="border">${i + 1}</th>
                        <th scope="row" class="border">${carrinho[i].nome}</th>
                        <td class="border">${carrinho[i].descricao}</td>
                        <td class="border">R$ ${carrinho[i].preco}</td>
                        <td class="border">${carrinho[i].quantidade}</td>
                        <td class="border">R$ ${valorTotal.toFixed(2)}</td>                          
                        <td class="border"><a style="text-decoration:underline ;" onclick="removeUnit(${i})" >Devolver Item</a> <a style="text-decoration:underline ;" onclick="removeItem(${i})" >Excluir</a></td> 
                    </tr>`
    }
    document.getElementById('carTable').innerHTML = txt
}

function prodTable(tipo) {
    switch (tipo) {

        case '1':
            showTable(prodAlimentos)
            break
        case '3':
            showTable(prodFerramenta)
            break
        case '2':
            showTable(prodEletronicos)
            break

    }
}

function addCarrinho(cat, id) {
    var prod
    switch (cat) {
        case 'Alimentos':
            prod = verificaProd(prodAlimentos, id)
            verificaCar(prod)
            break
        case 'Eletronicos':
            prod = verificaProd(prodEletronicos, id)
            verificaCar(prod)
            break
        case 'Ferramentas':
            prod = verificaProd(prodFerramenta, id)
            verificaCar(prod)
            break
    }

    showTableCar();
}

function verificaProd(categoria, id) {
    for (let i = 0; i < categoria.length; i++) {
        if (categoria[i].id == id) {
            if (categoria[i].estoque > 0) {
                categoria[i].estoque--
                mainPage()
                return categoria[i]
            }
            alert('Sem produto disponível no estoque')
        }
    }

}

function verificaCar(produto) {

    if (carrinho.length > 0) {
        for (let i = 0; i < carrinho.length; i++) {
            if (carrinho[i].categoria == produto.categoria && carrinho[i].id == produto.id) {
                carrinho[i].quantidade++
                return true
            }

        }
        produto.quantidade = 1
        carrinho.push(produto)
        return true
    }
    else {
        carrinho.push(produto)
        carrinho[0].quantidade = 1
        return true
    }
}


function removeItem(i) {

    switch (carrinho[i].categoria) {
        case 'Alimentos':
            devolveEstoque(prodAlimentos, carrinho[i].id, carrinho[i].quantidade)
            break

        case 'Eletronicos':
            devolveEstoque(prodEletronicos, carrinho[i].id, carrinho[i].quantidade)
            break
        case 'Ferramentas':
            devolveEstoque(prodFerramenta, carrinho[i].id, carrinho[i].quantidade)
            break
    }

    carrinho.splice(i, 1)
    showTableCar();

}

function removeUnit(i) {

    if (carrinho[i].quantidade == 1) {
        removeItem(i)
        return true
    }
    switch (carrinho[i].categoria) {
        case 'Alimentos':
            devolveEstoque(prodAlimentos, carrinho[i].id, 1)

            break

        case 'Eletronicos':
            devolveEstoque(prodEletronicos, carrinho[i].id, 1)
            break
        case 'Ferramentas':
            devolveEstoque(prodFerramenta, carrinho[i].id, 1)
            break
    }

    carrinho[i].quantidade--
    showTableCar();

}

function devolveEstoque(categoria, id, quantidade) {

    for (let i = 0; i < categoria.length; i++) {
        if (categoria[i].id == id) {
            categoria[i].estoque += quantidade
            mainPage()
            return true
        }
    }


}


function pesquisar(pesquisa){
    let produto = []
    for(let i=0;i< prodAlimentos.length;i++){

        if(prodAlimentos[i].nome.toLowerCase() == pesquisa.toLowerCase()){

            produto.push(prodAlimentos[i])
            showTable(produto)
            return true
        }

    }    
    for(let i=0;i< prodEletronicos.length;i++){

        if(prodEletronicos[i].nome.toLowerCase() == pesquisa.toLowerCase()){

            produto.push(prodEletronicos[i])

            showTable(produto)
            return true
        }

    }
    for(let i=0;i< prodFerramenta.length;i++){

        if(prodFerramenta[i].nome.toLowerCase() == pesquisa.toLowerCase()){

            produto.push(prodFerramenta[i])

            showTable(produto)
            return true
        }

    }


}