async function pegarTodasLicitacoesEmAndamento(dataInicial = null, dataFinal = null, tamanhoPagina = 50) {
    let todasLicitacoes = [];
    let paginaAtual = 1;
    let totalPaginas = 1; // Começamos com 1 para garantir que o loop execute pelo menos uma vez

    // Função auxiliar para formatar a data para YYYYMMDD
    const formatarDataYYYYMMDD = (data) => {
        const d = new Date(data);
        const ano = String(d.getFullYear());
        const mes = String(d.getMonth() + 1).padStart(2, '0');
        const dia = String(d.getDate()).padStart(2, '0');
        return `${ano}${mes}${dia}`;
    };

    // Define a data final padrão se não for fornecida (hoje)
    let dataFinalFormatada;
    if (!dataFinal) {
        dataFinalFormatada = formatarDataYYYYMMDD(new Date());
    } else {
        dataFinalFormatada = formatarDataYYYYMMDD(dataFinal);
    }

    // Se dataInicial for fornecida, formata-a também
    let dataInicialFormatada = null;
    if (dataInicial) {
        dataInicialFormatada = formatarDataYYYYMMDD(dataInicial);
    }

    console.log(`Iniciando coleta de licitações com propostas abertas até ${dataFinalFormatada}...`);

    while (paginaAtual <= totalPaginas) {
        let url = `https://pncp.gov.br/api/consulta/v1/contratacoes/proposta?pagina=${paginaAtual}&dataFinal=${dataFinalFormatada}&tamanhoPagina=${tamanhoPagina}&order=dataRecebimentoProposta asc`;

        if (dataInicialFormatada) {
            url += `&dataInicial=${dataInicialFormatada}`;
        }

        try {
            console.log(`Buscando página ${paginaAtual} de ${totalPaginas || '?'}: ${url}`); // Mostrar total de páginas após a primeira requisição
            const response = await fetch(url);

            if (!response.ok) {
                const errorBody = await response.text(); 
                console.error(`Erro HTTP! Status: ${response.status} - ${response.statusText}`);
                console.error('Corpo do erro da API:', errorBody);
                // Em caso de erro, você pode decidir parar ou continuar tentando
                throw new Error(`Falha na requisição da API na página ${paginaAtual}.`); 
            }

            const resultado = await response.json();

            if (resultado && resultado.data && Array.isArray(resultado.data)) {
                todasLicitacoes = todasLicitacoes.concat(resultado.data);
                
                // Atualiza o total de páginas com base na resposta da API da primeira requisição
                if (paginaAtual === 1 && resultado.links.last) {
                    totalPaginas = resultado.links.last.pageNumber;
                    console.log(`Total de ${totalPaginas} páginas encontradas para varrer.`);
                } else if (paginaAtual === 1 && !resultado.links.last) {
                    // Se só tem 1 página, totalPaginas permanece 1
                    totalPaginas = 1; 
                }

                paginaAtual++;
            } else {
                console.warn(`Aviso: Dados inesperados recebidos na página ${paginaAtual}.`);
                break; // Parar se a estrutura de dados não for a esperada
            }

            // Pausa para evitar sobrecarregar o servidor da API (essencial para scraping de volume)
            await new Promise(resolve => setTimeout(resolve, 300)); // Atraso de 300ms

        } catch (error) {
            console.error(`Erro fatal ao coletar licitações: ${error.message}`);
            break; // Sai do loop em caso de erro fatal
        }
    }

    console.log(`\nColeta concluída! Total de ${todasLicitacoes.length} licitações coletadas.`);
    return todasLicitacoes; // Retorna o array completo de licitações
}

// --- Exemplo de Uso da Nova Função ---

async function executarColetaCompleta() {
    console.log('--- Iniciando coleta completa de todas as licitações em andamento ---');
    
    // Você pode chamar a função sem parâmetros para coletar até hoje, com tamanhoPágina padrão de 50.
    // Ou especifique um período:
    const licitacoesCompletas = await pegarTodasLicitacoesEmAndamento('2025-04-01'); // Exemplo: de 2024-01-01 até hoje

    if (licitacoesCompletas && licitacoesCompletas.length > 0) {
        console.log(`Primeira licitação coletada:`, licitacoesCompletas[0]);
        console.log(`Última licitação coletada:`, licitacoesCompletas[licitacoesCompletas.length - 1]);
        
        // Exemplo de como você pode salvar ou processar esses dados
        // console.log(JSON.stringify(licitacoesCompletas, null, 2)); // Para ver o JSON completo no console
        // Ou salve em um arquivo:
        // const fs = require('fs'); // Necessário 'fs' para Node.js
        // fs.writeFileSync('licitacoes_completas.json', JSON.stringify(licitacoesCompletas, null, 2));
        // console.log('Dados salvos em licitacoes_completas.json');
    } else {
        console.log('Nenhuma licitação encontrada ou erro na coleta.');
    }
}

// --- Chame a função para iniciar a coleta ---
executarColetaCompleta();