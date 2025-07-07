export function formatToPncpDate(value) {
  if (value instanceof Date) {
    const year = value.getFullYear();
    const month = String(value.getMonth() + 1).padStart(2, '0');
    const day = String(value.getDate()).padStart(2, '0');
    return `${year}${month}${day}`;
  }
  if (typeof value === 'string') {
    const digits = value.replace(/[-/]/g, '');
    if (/^\d{8}$/.test(digits)) {
      return digits;
    }
  }
  throw new Error('Data inválida, deve estar no formato yyyyMMdd ou yyyy-MM-dd');
}

export function parseResponseDates(data) {
  if (Array.isArray(data)) {
    return data.map(parseResponseDates);
  }
  if (data && typeof data === 'object') {
    for (const key of Object.keys(data)) {
      data[key] = parseResponseDates(data[key]);
    }
    return data;
  }
  if (typeof data === 'string') {
    const digits = data.replace(/[-/]/g, '');
    if (/^\d{8}$/.test(digits)) {
      const year = digits.slice(0, 4);
      const month = digits.slice(4, 6);
      const day = digits.slice(6, 8);
      return new Date(`${year}-${month}-${day}T00:00:00Z`);
    }
    const iso = new Date(data);
    if (!isNaN(iso)) {
      return iso;
    }
  }
  return data;
}
