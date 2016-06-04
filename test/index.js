var pull    = require('pull-stream')
var tape    = require('tape')
var tf      = require('test-files')
var ident   = require('../')
var mns     = require('../magic-numbers')

Object.keys(mns).forEach(function (mn) {
  var type = mns[mn]
  if (!tf.has(type))
    return

  tape('identify: '+type, function (t) {
    pull(tf.read(type), pull.collect((err, bufs) => {
      if (err) throw err
      var buf = Buffer.concat(bufs)
      t.equal(ident(buf), type)
      t.end()
    }))
  })
})

tape('identify: svg', function (t) {
  pull(tf.read('svg'), pull.collect((err, bufs) => {
    if (err) throw err
    var buf = Buffer.concat(bufs)
    t.equal(ident(buf), 'svg')
    t.end()
  }))
})

tape('identify: html', function (t) {
  pull(tf.read('html'), pull.collect((err, bufs) => {
    if (err) throw err
    var buf = Buffer.concat(bufs)
    t.equal(ident(buf), 'html')
    t.end()
  }))
})
