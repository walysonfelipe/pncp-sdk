import { z } from 'zod';

export const paginationSchema = z.object({
  pagina: z.number().min(1, 'A página deve ser >= 1'),
  tamanhoPagina: z.number().min(10).max(500).optional(),
});

export const dataRangeSchema = z.object({
  dataInicial: z.string(),
  dataFinal: z.string(),
});