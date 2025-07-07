const { dataRangeSchema, paginationSchema } = require('./commonSchemas.cjs');

const pcaSchema = dataRangeSchema.merge(paginationSchema);
const pcaUsuarioSchema = dataRangeSchema.merge(paginationSchema);
const pcaAtualizacaoSchema = dataRangeSchema.merge(paginationSchema);

module.exports = { pcaSchema, pcaUsuarioSchema, pcaAtualizacaoSchema };
