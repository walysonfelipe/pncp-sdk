import { z } from 'zod';
import { dataRangeSchema, paginationSchema } from './commonSchemas.js';

export const atasSchema = dataRangeSchema.merge(paginationSchema);
