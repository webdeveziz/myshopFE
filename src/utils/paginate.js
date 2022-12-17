export const paginate = (items, currentPage, pageSize) => {
  const startIndex = (currentPage - 1) * pageSize

  // 1=>0, 2=>3, 3=>6 ...
  return [...items].splice(startIndex, pageSize)
}
