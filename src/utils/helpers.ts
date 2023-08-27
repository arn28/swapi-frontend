export const getIdFromUrl = (url: string): number => {
  const lastSlash = url.lastIndexOf('/')
  const secondLastSlash = url.lastIndexOf('/', lastSlash - 1)
  if (secondLastSlash !== url.length - 1) {
    const id = url.substring(secondLastSlash + 1, lastSlash)
    return Number(id)
  } else {
    return NaN
  }
}

export const getPageFromUrl = (url: string): number => {
  const lastEqual = url.lastIndexOf('=')
  if (lastEqual !== url.length - 1) {
    const id = url.substring(lastEqual + 1)
    return Number(id)
  } else {
    return NaN
  }
}
