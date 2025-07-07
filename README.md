# 🌐 PNCP SDK

SDK PNCP em **Node.js** para consumir a API do Portal Nacional de Contratações Públicas (PNCP).
Facilite a integração com dados públicos de contratações, contratos, atas, PCAs e instrumentos no seu projeto Node.js.

---

## 🚀 Instalação

```bash
npm install pncp-sdk
```

---

## 🗂️ Importação

```js
import { Contratacoes, Contratos, Atas, PCA, Instrumentos } from 'pncp-sdk';
```

---

## ✅ Exemplos de uso

### 📄 Consultar Contratações

```js
const dados = await Contratacoes.consultarPublicacao({
  dataInicial: '2025-01-01',
  dataFinal: '2025-06-30',
  codigoModalidadeContratacao: 1,
  pagina: 1,
  tamanhoPagina: 20,
});
console.log(dados);
```

---

### 📝 Consultar Atas

```js
const atas = await Atas.consultarPeriodo({
  dataInicial: '2025-01-01',
  dataFinal: '2025-12-31',
  pagina: 1,
});
console.log(atas);
```

---

## ⚙️ Configuração

Caso necessário, edite o arquivo `config.js` para customizar o `BASE_URL` da API (por padrão, apontando para o ambiente oficial do PNCP).

---

## 💡 Funcionalidades

* 📑 Consultas de publicações e contratações
* 📄 Consultas de contratos e atas
* 🗓️ Consultas de planos de contratações (PCA)
* 📂 Acesso aos instrumentos de gestão
* 🔄 Paginação e filtros customizáveis

---

## 🤝 Contribuindo

Contribuições são bem-vindas!
Sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## 📄 Licença

Distribuído sob a licença **MIT**.
Consulte o arquivo [LICENSE](./LICENSE) para mais detalhes.
