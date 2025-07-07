const { dataRangeSchema, paginationSchema } = require('./commonSchemas.cjs');

const atasSchema = dataRangeSchema.merge(paginationSchema);

module.exports = { atasSchema };
