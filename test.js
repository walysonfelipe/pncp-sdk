import assert from 'assert';
import * as esm from './pncpClient.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjs = require('./pncpClient.cjs');

const cases = [
  ['Contratacoes', ['consultarPublicacao', 'consultarProposta', 'consultarAtualizacao']],
  ['Contratos', ['consultarPublicacao', 'consultarAtualizacao']],
  ['Atas', ['consultarPeriodo', 'consultarAtualizacao']],
  ['PCA', ['consultar', 'consultarUsuario', 'consultarAtualizacao']],
  ['Instrumentos', ['consultarInclusao']],
];

for (const [group, funcs] of cases) {
  const esmGroup = esm[group];
  const cjsGroup = cjs[group];
  for (const fn of funcs) {
    assert.strictEqual(typeof esmGroup[fn], 'function');
    assert.strictEqual(typeof cjsGroup[fn], 'function');
  }
}

for (const [group, funcs] of cases) {
  const esmGroup = esm[group];
  const cjsGroup = cjs[group];
  for (const fn of funcs) {
    const esmRes = await esmGroup[fn]({});
    const cjsRes = await cjsGroup[fn]({});
    assert.deepStrictEqual(esmRes, {});
    assert.deepStrictEqual(cjsRes, {});
  }
}

console.log('all functions work via import and require');
