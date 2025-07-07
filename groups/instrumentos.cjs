const api = require('../shared/api.cjs');
const { instrumentosSchema } = require('../validators/instrumentosSchemas.cjs');
const fetchWithValidation = require('../shared/fetchWithValidation.cjs');

async function consultarInclusao(params) {
  return await fetchWithValidation('/v1/instrumentoscobranca/inclusao', params, instrumentosSchema, api);
}

module.exports = {
  consultarInclusao,
};
