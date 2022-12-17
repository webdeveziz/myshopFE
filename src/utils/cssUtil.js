export const cssColor = (rate) => {
  if (rate >= 4) {
    return <span style={{ color: 'green' }}>{rate}</span>
  } else if (rate >= 3 && rate < 4) {
    return <span style={{ color: 'orange' }}>{rate}</span>
  } else if (rate < 3) {
    return <span style={{ color: 'red' }}>{rate}</span>
  }
}
