function pad (n) {
  return (n < 10) ? ('0' + n) : n
}
module.exports = function (value) {
  const date = new Date(value)
  return pad(date.getFullYear()) + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate())
}
