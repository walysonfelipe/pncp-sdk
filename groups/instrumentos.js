import api from '../shared/api.js';
import { instrumentosSchema } from '../validators/instrumentosSchemas.js';
import fetchWithValidation from '../shared/fetchWithValidation.js';

export async function consultarInclusao(params) {
  return await fetchWithValidation('/v1/instrumentoscobranca/inclusao', params, instrumentosSchema, api);
}
