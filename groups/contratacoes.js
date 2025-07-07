import api from '../shared/api.js';
import { contratacaoSchema } from '../validators/contratacoesSchemas.js';
import fetchWithValidation from '../shared/fetchWithValidation.js';

export async function consultarPublicacao(params) {
  return await fetchWithValidation('/v1/contratacoes/publicacao', params, contratacaoSchema, api);
}

export async function consultarProposta(params) {
  return await fetchWithValidation('/v1/contratacoes/proposta', params, contratacaoSchema, api);
}

export async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/contratacoes/atualizacao', params, contratacaoSchema, api);
}