# 🌐 PNCP SDK

SDK PNCP em **Node.js** para consumir a API do Portal Nacional de Contratações Públicas (PNCP).
Facilite a integração com dados públicos de contratações, contratos, atas, PCAs e instrumentos no seu projeto Node.js.
[![npm version](https://img.shields.io/npm/v/pncp-sdk.svg)](https://www.npmjs.com/package/pncp-sdk)

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

### Uso com TypeScript

```ts
import type { ContratacoesParams } from 'pncp-sdk';

const dados = await Contratacoes.consultarPublicacao<SeuTipo>(
  {} as ContratacoesParams
);
```

---

## ✅ Exemplos de uso

As datas podem ser informadas como `Date` ou como strings nos formatos
`yyyyMMdd` ou `yyyy-MM-dd`. A SDK converte automaticamente para o padrão
esperado pela API e retorna objetos `Date` nas respostas.

### 📄 Consultar Contratações

```js
const dados = await Contratacoes.consultarPublicacao({
  dataInicial: '20250101',
  dataFinal: '20250630',
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
  dataInicial: '20250101',
  dataFinal: '20251231',
  pagina: 1,
});
console.log(atas);
```

---

## ⚙️ Configuração

Caso necessário, edite o arquivo `config.js` para customizar o `BASE_URL` da API (por padrão, apontando para o ambiente oficial do PNCP).

```js
// config.js
export const BASE_URL = 'https://seu-endereco/api';
```

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
