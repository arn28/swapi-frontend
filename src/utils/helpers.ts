export const getIdFromUrl = (url: string): number => {
  const lastSlash = url.lastIndexOf('/')
  const secondLastSlash = url.lastIndexOf('/', lastSlash - 1)
  if (lastSlash !== -1 && secondLastSlash !== -1) {
    const id = url.substring(secondLastSlash + 1, lastSlash)
    return Number(id)
  } else {
    return -1
  }
}
