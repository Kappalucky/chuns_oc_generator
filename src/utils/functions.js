export const pickRandom = (data) => {
  // Check if the dataSet is an array or an object
  if (Array.isArray(data)) {
    return data[Math.floor(Math.random() * data.length)]
  } else if (typeof data === 'object' && !Array.isArray(data) && Object.keys(data).length > 0) {
    const keys = Object.keys(data)
    const randomKey = keys[Math.floor(Math.random() * keys.length)]
    return data[randomKey]
  } else {
    // Handle other data types if needed
    return null
  }
}
