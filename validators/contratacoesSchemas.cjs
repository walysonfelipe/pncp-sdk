const { z } = require('zod');
const { dataRangeSchema, paginationSchema } = require('./commonSchemas.cjs');

const contratacaoSchema = dataRangeSchema.extend({
  codigoModalidadeContratacao: z.number(),
  codigoModoDisputa: z.number().optional(),
  uf: z.string().optional(),
  codigoMunicipioIbge: z.string().optional(),
  cnpj: z.string().optional(),
  codigoUnidadeAdministrativa: z.string().optional(),
  idUsuario: z.number().optional(),
}).merge(paginationSchema);

module.exports = { contratacaoSchema };
