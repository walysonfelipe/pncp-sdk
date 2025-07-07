import api from '../shared/api.js';
import { atasSchema } from '../validators/atasSchemas.js';
import fetchWithValidation from '../shared/fetchWithValidation.js';

export async function consultarPeriodo(params) {
  return await fetchWithValidation('/v1/atas', params, atasSchema, api);
}

export async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/atas/atualizacao', params, atasSchema, api);
}
