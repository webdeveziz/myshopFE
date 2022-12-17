export const upperCase = (str) => {
  const firstLetter = str[0].toUpperCase()
  const restLetters = str.split('').splice(1).join('')
  return firstLetter + restLetters
}
