export const readMore = (description, isMore = true) => {
  const read = description.split(' ')
  const smallText = description.split(' ').splice(0, 10).join(' ') + '...'
  if (isMore) {
    if (read.length > 10) {
      return smallText
    }
  }
  return description
}
