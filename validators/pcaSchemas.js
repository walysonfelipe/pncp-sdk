import { z } from 'zod';
import { dataRangeSchema, paginationSchema } from './commonSchemas.js';

export const pcaSchema = dataRangeSchema.merge(paginationSchema);
export const pcaUsuarioSchema = dataRangeSchema.merge(paginationSchema);
export const pcaAtualizacaoSchema = dataRangeSchema.merge(paginationSchema);
