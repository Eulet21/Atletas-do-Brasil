// Função para realizar a pesquisa
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    
    // Obtém o valor do campo de pesquisa
    let campoPesquisa = document.getElementById("campo-pesquisa").value.trim().toLowerCase();

    // Se campoPesquisa for uma string vazia
    if (!campoPesquisa) {
        section.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um atleta.</p>";
        return;
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";

    // Itera sobre cada dado da lista de dados
    for (let dado of dados) {
        let titulo = dado.titulo.toLowerCase();
        let descricao = dado.descricao.toLowerCase();
        let tags = dado.tags.toLowerCase();

        // Verifica se algum dos campos contém o texto da pesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank">Mais informações</a>
                </div>
            `;
        }
    }

    // Se não houver resultados, exibe uma mensagem apropriada
    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>";
    }

    // Atribui os resultados gerados à seção HTML
    section.innerHTML = resultados;
}
