/**
 * Преобразует строку в JSON-объект
 * @param string{String} - исходная строка
 * @return Object
 */
const parseJSON = (string) => {
  let json = {}

  try {
    json = JSON.parse(string)
  } catch (error) {
    console.error(error)
  }

  return json
}

export default parseJSON
