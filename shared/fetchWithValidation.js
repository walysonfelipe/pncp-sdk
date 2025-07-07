export default async function fetchWithValidation(url, params, schema, api) {
  const parsed = schema.safeParse(params);
  if (!parsed.success) {
    throw new Error(`Parâmetros inválidos: ${JSON.stringify(parsed.error.format())}`);
  }
  try {
    const res = await api.get(url, { params });
    return res.data;
  } catch (error) {
    console.error(`Erro ao buscar ${url}:`, error.response?.data || error.message);
    throw error;
  }
}