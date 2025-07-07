const { dataRangeSchema, paginationSchema } = require('./commonSchemas.cjs');

const contratosSchema = dataRangeSchema.merge(paginationSchema);

module.exports = { contratosSchema };
