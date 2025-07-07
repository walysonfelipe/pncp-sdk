const api = require('../shared/api.cjs');
const { pcaSchema, pcaUsuarioSchema, pcaAtualizacaoSchema } = require('../validators/pcaSchemas.cjs');
const fetchWithValidation = require('../shared/fetchWithValidation.cjs');

async function consultar(params) {
  return await fetchWithValidation('/v1/pca/', params, pcaSchema, api);
}

async function consultarUsuario(params) {
  return await fetchWithValidation('/v1/pca/usuario', params, pcaUsuarioSchema, api);
}

async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/pca/atualizacao', params, pcaAtualizacaoSchema, api);
}

module.exports = {
  consultar,
  consultarUsuario,
  consultarAtualizacao,
};
