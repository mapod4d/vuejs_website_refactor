const fetcherJson = async (jsonPath, arrayToFild) => {
  const result = await fetch(jsonPath)
  if (!result.ok) {
    throw new Error('HTTP error ' + result.status)
  }
  const json = await result.json()
  arrayToFild.push(...json)
}

export default fetcherJson
