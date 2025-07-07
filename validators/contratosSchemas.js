import { z } from 'zod';
import { dataRangeSchema, paginationSchema } from './commonSchemas.js';

export const contratosSchema = dataRangeSchema.merge(paginationSchema);
