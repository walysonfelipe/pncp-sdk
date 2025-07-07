const api = require('../shared/api.cjs');
const { atasSchema } = require('../validators/atasSchemas.cjs');
const fetchWithValidation = require('../shared/fetchWithValidation.cjs');

async function consultarPeriodo(params) {
  return await fetchWithValidation('/v1/atas', params, atasSchema, api);
}

async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/atas/atualizacao', params, atasSchema, api);
}

module.exports = {
  consultarPeriodo,
  consultarAtualizacao,
};
