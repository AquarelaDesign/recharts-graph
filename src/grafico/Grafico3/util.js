export const colorSelector = (
  value,
  trueValue,
  index,
  selectedIndex,
) => {
  if (trueValue >= 2000) {
    return "#4a90e2"
  }
  if (trueValue <= -2000) {
    return "#EA534D"
  }
  if (index !== selectedIndex) {
    return value > 0
      ? "#8098b5"
      : "#E4B1B1"
  }

  return value > 0
    ? "#576c84"
    : "#c19090"
}

export const formatNumber = (amount) => {
  return `${amount}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

const isValueTooLarge = (value, maximum) =>
  value >= maximum || value <= -maximum

const calculateDisplayValue = (
  value,
  tooLarge,
  maxConst,
) => {
  if (tooLarge) {
    return value > 0 ? maxConst : -maxConst
  }
  return value
}

export const convertToGraphCoordinates = (results) => {
  // create an ordered sort array of userIds
  const userIds = results.map(r => r.userId)
  const sortOrderOfuserIds = [...new Set([...userIds])]
  // make a basemap of all results by userId
  const basemap = results.reduce((acc, next) => {
    const id = next.userId
    const contents = !!acc[id] ? [...acc[id], next] : [next]

    const toReturn = {
      ...acc,
      [id]: contents,
    }

    return toReturn
  }, {})

  // convert this to an array of arrays.
  const basemaps = sortOrderOfuserIds.map(id => basemap[id])
  const coordinates = !!basemaps.length
    ? basemaps
      .map(dealerRounds => {
        const cc = dealerRounds.map(
          (item, i) => {
            const { score } = item
            const isLargeValue = isValueTooLarge(
              score,
              2000,
            )

            const displayedValue = calculateDisplayValue(
              score,
              isLargeValue,
              2000,
            )
            return {
              label: `${i + 1}`,
              displayedValue,
              trueValue: score,
            }
          },
        )
        return cc
      })
      .reduce((acc, next) => acc.concat(next), [])
    : []
  return coordinates
}
