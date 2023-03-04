const readFile = (file) => {
  return fetch(file).then(response => response.text())
}

export default readFile
