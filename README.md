# identify-filetype

Identifies the file-type of a buffer using the [magic-number signatures at the start of the file](http://en.wikipedia.org/wiki/list_of_file_signatures).

```js
var identify = require('identify-filetype')

console.log(identify(some_buffer)) // => string | false
```

**Supported types:**

jpg
png
gif
bmp
tif
tif
nif
ico
psd
rar
zip
gz
msi
iso
rtf
avi
wmv
wma
swf
flv
mid
pdf
doc
docx
mp3
svg
html

**Tested:**

tif
pdf
psd
gif
jpg
png
bmp
tif
ico
rar
docx
gz
doc
rtf
svg
html