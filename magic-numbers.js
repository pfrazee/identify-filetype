// thanks to https://github.com/bibig/whether

// http://www.astro.keele.ac.uk/oldusers/rno/computing/file_magic.html
// http://en.wikipedia.org/wiki/list_of_file_signatures
// http://asecuritysite.com/forensics/magic

module.exports = {
  'ffd8ff': 'jpg',
  '89504e47': 'png',
  '47494638': 'gif',
  '424d': 'bmp',
  '4949': 'tif',
  '4d4d': 'tif',
  '49494e31': 'nif',
  '00000100': 'ico',
  '38425053': 'psd',
  '526172211a07': 'rar',
  '504b0304': 'zip',
  '1f8b08': 'gz',
  // '7573746172': 'tar', TODO broken, needs to be testing against the offset!
  'd0cf11e0a1b11ae1': 'msi',
  '4344303031': 'iso',
  '7b5c72746631': 'rtf',
  '52494646': 'avi',
  // '6d6f6f76': 'mov', TODO broken, not sure why
  '3026b2758e66cf': 'wmv',
  '3026b2758e66cf': 'wma',
  '465753': 'swf',
  '464c56': 'flv',
  '4d546864': 'mid',
  '25504446': 'pdf',
  'd0cf11e0a1b11ae1': 'doc',
  '504b0304': 'docx',
  '494443': 'mp3'
}

/*
avi
wmv
wma
swf
flv
mid
mp3
*/