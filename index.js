var mns  = require('./magic-numbers')

module.exports = function (buf) {
  if (!Buffer.isBuffer(buf))
    throw "Must be given a buffer"

  // compare the first bytes against the magic numbers
  var hex = buf.slice(0, (buf.length > 10) ? 10 : buf.length).toString('hex')
  for (var magicNumber in mns) {
    if (hex.indexOf(magicNumber) === 0)
      return mns[magicNumber]
  }

  // convert to string, check the plaintext types
  var asStr = buf.slice(0, (buf.length > 512) ? 512 : buf.length).toString('utf-8').trim()
  if (asStr.indexOf('<svg') !== -1)
    return 'svg'
  if (asStr.indexOf('<html') !== -1)
    return 'html'
}