export const randomize = (dataSet) => {
  // Check if the dataSet is an array or an object
  if (Array.isArray(dataSet)) {
    // If it's an array, get the length
    const length = dataSet.length

    // Check if the array is not empty
    if (length > 0) {
      // Generate a random index and return the corresponding item
      const randomIndex = Math.floor(Math.random() * length)
      return dataSet[randomIndex]
    } else {
      // If the array is empty, return null or handle it as needed
      return null
    }
  } else if (typeof dataSet === 'object' && dataSet !== null) {
    // If it's an object, get the keys
    const keys = Object.keys(dataSet)

    // Check if the object has any keys
    if (keys.length > 0) {
      // Choose a random key and return the corresponding value
      const randomKey = keys[Math.floor(Math.random() * keys.length)]
      return dataSet[randomKey]
    } else {
      // If the object has no keys, return null or handle it as needed
      return null
    }
  } else {
    // Handle other data types if needed
    return null
  }
}
