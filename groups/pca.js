import api from '../shared/api.js';
import { pcaSchema, pcaUsuarioSchema, pcaAtualizacaoSchema } from '../validators/pcaSchemas.js';
import fetchWithValidation from '../shared/fetchWithValidation.js';

export async function consultar(params) {
  return await fetchWithValidation('/v1/pca/', params, pcaSchema, api);
}

export async function consultarUsuario(params) {
  return await fetchWithValidation('/v1/pca/usuario', params, pcaUsuarioSchema, api);
}

export async function consultarAtualizacao(params) {
  return await fetchWithValidation('/v1/pca/atualizacao', params, pcaAtualizacaoSchema, api);
}
