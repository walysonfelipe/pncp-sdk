const { formatToPncpDate, parseResponseDates } = require('./dateUtils.cjs');

module.exports = async function fetchWithValidation(url, params, schema, api) {
  const parsed = schema.safeParse(params);
  if (!parsed.success) {
    throw new Error(`Parâmetros inválidos: ${JSON.stringify(parsed.error.format())}`);
  }

  const formatted = { ...parsed.data };
  if (formatted.dataInicial) {
    formatted.dataInicial = formatToPncpDate(formatted.dataInicial);
  }
  if (formatted.dataFinal) {
    formatted.dataFinal = formatToPncpDate(formatted.dataFinal);
  }

  try {
    const res = await api.get(url, { params: formatted });
    return parseResponseDates(res.data);
  } catch (error) {
    console.error(`Erro ao buscar ${url}:`, error.response?.data || error.message);
    throw error;
  }
};
