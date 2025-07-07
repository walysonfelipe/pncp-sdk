const api = require('../shared/api.cjs');
const { contratosSchema } = require('../validators/contratosSchemas.cjs');
const fetchWithValidation = require('../shared/fetchWithValidation.cjs');

async function consultarPublicacao(params) {
  return await fetchWithValidation('/v1/contratos', params, contratosSchema, api);
}

async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/contratos/atualizacao', params, contratosSchema, api);
}

module.exports = {
  consultarPublicacao,
  consultarAtualizacao,
};
