const api = require('../shared/api.cjs');
const { contratacaoSchema } = require('../validators/contratacoesSchemas.cjs');
const fetchWithValidation = require('../shared/fetchWithValidation.cjs');

async function consultarPublicacao(params) {
  return await fetchWithValidation('/v1/contratacoes/publicacao', params, contratacaoSchema, api);
}

async function consultarProposta(params) {
  return await fetchWithValidation('/v1/contratacoes/proposta', params, contratacaoSchema, api);
}

async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/contratacoes/atualizacao', params, contratacaoSchema, api);
}

module.exports = {
  consultarPublicacao,
  consultarProposta,
  consultarAtualizacao,
};
