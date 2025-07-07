import { z } from 'zod';
import { dataRangeSchema, paginationSchema } from './commonSchemas.js';

export const contratacaoSchema = dataRangeSchema.extend({
  codigoModalidadeContratacao: z.number(),
  codigoModoDisputa: z.number().optional(),
  uf: z.string().optional(),
  codigoMunicipioIbge: z.string().optional(),
  cnpj: z.string().optional(),
  codigoUnidadeAdministrativa: z.string().optional(),
  idUsuario: z.number().optional(),
}).merge(paginationSchema);
