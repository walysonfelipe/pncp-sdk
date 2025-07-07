import api from '../shared/api.js';
import { contratosSchema } from '../validators/contratosSchemas.js';
import fetchWithValidation from '../shared/fetchWithValidation.js';

export async function consultarPublicacao(params) {
  return await fetchWithValidation('/v1/contratos', params, contratosSchema, api);
}

export async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/contratos/atualizacao', params, contratosSchema, api);
}