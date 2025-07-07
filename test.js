import assert from 'assert';
import axios from 'axios';
import * as esm from './pncpClient.js';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);
const cjs = require('./pncpClient.cjs');

const endpoints = {
  Contratacoes: {
    consultarPublicacao: '/v1/contratacoes/publicacao',
    consultarProposta: '/v1/contratacoes/proposta',
    consultarAtualizacao: '/v1/contratacoes/atualizacao',
  },
  Contratos: {
    consultarPublicacao: '/v1/contratos',
    consultarAtualizacao: '/v1/contratos/atualizacao',
  },
  Atas: {
    consultarPeriodo: '/v1/atas',
    consultarAtualizacao: '/v1/atas/atualizacao',
  },
  PCA: {
    consultar: '/v1/pca/',
    consultarUsuario: '/v1/pca/usuario',
    consultarAtualizacao: '/v1/pca/atualizacao',
  },
  Instrumentos: {
    consultarInclusao: '/v1/instrumentoscobranca/inclusao',
  },
};

for (const [group, funcs] of Object.entries(endpoints)) {
  const esmGroup = esm[group];
  const cjsGroup = cjs[group];
  for (const fn of Object.keys(funcs)) {
    assert.strictEqual(typeof esmGroup[fn], 'function');
    assert.strictEqual(typeof cjsGroup[fn], 'function');
  }
}

for (const [group, funcs] of Object.entries(endpoints)) {
  const esmGroup = esm[group];
  const cjsGroup = cjs[group];
  for (const [fn, url] of Object.entries(funcs)) {
    axios.calls.length = 0;
    const esmRes = await esmGroup[fn]({});
    assert.deepStrictEqual(esmRes, {});
    assert.deepStrictEqual(axios.calls.pop(), { url, params: {} });

    axios.calls.length = 0;
    const cjsRes = await cjsGroup[fn]({});
    assert.deepStrictEqual(cjsRes, {});
    assert.deepStrictEqual(axios.calls.pop(), { url, params: {} });
  }
}

console.log('all sdk functions call expected endpoints via import and require');
