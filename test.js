import assert from 'assert';
import * as esm from './pncpClient.js';
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const cjs = require('./pncpClient.cjs');

assert.strictEqual(typeof esm.Contratacoes.consultarPublicacao, 'function');
assert.strictEqual(typeof cjs.Contratacoes.consultarPublicacao, 'function');
console.log('both import and require work');
