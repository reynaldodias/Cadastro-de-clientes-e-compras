
function validarProduto(idNomeProduto, idQtidadeProduto) {
    let nome = document.getElementById(idNomeProduto).value;
    let qtidade = document.getElementById(idQtidadeProduto).value;

    if (nome == "")
        alert("Nome do produto não pode estar em branco. Favor preenchê-lo!");
    else comprarProduto(nome, parseInt(qtidade));
}

function comprarProduto(produto,qtidade) {
    let novoProduto = {nome:produto, quantidade:qtidade};

    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        if (produtos == null) produtos = []; // Nenhum produto ainda foi cadastrado
        else produtos = JSON.parse(produtos);
        produtos.push(novoProduto); // Adiciona um novo produto
        localStorage.setItem("produtos",JSON.stringify(produtos))
        alert("Foram cadastradas com sucesso "+qtidade+" unidades do produto "+ produto+"!");
        atualizarTotalCarrinho("totalCarrinho");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function atualizarTotalCarrinho(idCampo) {
   
    localStorage.setItem("totalCarrinho",++document.getElementById(idCampo).innerHTML);
}

function carregarTotalCarrinho(idCampo) {
    if (typeof(Storage) !== "undefined") {
        let totalCarrinho = localStorage.getItem("totalCarrinho");
        if (totalCarrinho == null) totalCarrinho = 0;
        document.getElementById(idCampo).innerHTML = totalCarrinho;
    }
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function mostrarCarrinho() {
    if (typeof(Storage) !== "undefined") {
        let produtos = localStorage.getItem("produtos");
        document.write("<h1>Adicionados ao carrinho:</h1>")
        if (produtos == null)
            document.write("<h3>Ainda não há nenhum item no carrinho</h3>");
        else {
            produtos = JSON.parse(produtos);
            produtos.forEach(produto => {
                document.write("<ul>");
                document.write("<li>Nome do produto: "+produto.nome+"</li>");
                document.write("<li>Quantidade do produto: "+produto.quantidade+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");    
}
//--------------------------------------------------------------------------------------------------------------------

function validarCliente(idNomeCliente, idCpf, idEndereco) {
    let nome = document.getElementById(idNomeCliente).value;
    let cpf = document.getElementById(idCpf).value;
    let endereco = document.getElementById(idEndereco).value;
    

    if (nome == "")
        alert("Nome do cliente não pode estar em branco. Favor preenchê-lo!");
    else if (cpf == "")
        alert("Cpf não pode estar em branco. Favor preenchê-lo!");
    else cadastrarCliente(nome, cpf, endereco);
}


function cadastrarCliente(cliente, codCpf, end,) {
    let novoCliente = {nome:cliente, cpf:codCpf, endereco:end};

    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        if (clientes == null) clientes = []; // Nenhum cliente ainda foi cadastrado
        else clientes = JSON.parse(clientes);
        clientes.push(novoCliente); // Adiciona um novo cliente
        localStorage.setItem("clientes",JSON.stringify(clientes))
        alert("Foi cadastrado com sucesso o novo cliente "+ cliente +"!");
        atualizarTotalCliente("totalCliente");
        location.reload();
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível executar essa aplicação");
}


function listarCliente() {
    if (typeof(Storage) !== "undefined") {
        let clientes = localStorage.getItem("clientes");
        document.write("<h1>Cliente:</h1>")
        if (clientes == null)
            document.write("<h3>Ainda não há nenhum cliente</h3>");
        else {
            clientes = JSON.parse(clientes);
            clientes.forEach(cliente => {
                document.write("<ul>");
                document.write("<li>Nome do cliente: "+cliente.nome+"</li>");
                document.write("<li>Cpf do cliente: "+cliente.cpf+"</li>");
                document.write("<li>Endereço do cliente: "+cliente.endereco+"</li>");
                document.write("</ul>");
            });
        }
    } 
    else alert("A versão do seu navegador é muito antiga. Por isso, não será possível visualizar o estoque!");  
    
    
}