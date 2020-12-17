module.exports = function (value) {
  const url = value.replace('http://', '').replace('https://', '')
  const urlParts = url.split(/[/?#]/)
  return urlParts[0]
}
