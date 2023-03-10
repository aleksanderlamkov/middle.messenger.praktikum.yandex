const getStringifyData = (data: Record<string, unknown>): string => {
  return Object
    .entries(data)
    .reduce((query, [key, value]) => `${query}&${key}=${value}`, '?')
}

export default getStringifyData
