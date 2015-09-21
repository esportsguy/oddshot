# oddshot
oddshot.tv video downloader

#### Command line usage
``` sh
npm install oddshot -g
oddshot http://oddshot.tv/shot/dreamhackcs-20150920202118125 output.mp4
```
#### Node stream usage
``` sh
npm install oddshot
```
``` javascript
var fs = require('fs');
var video = require('oddshot');
video('http://oddshot.tv/shot/dreamhackcs-20150920202118125').pipe(fs.createWriteStream('ouput.mp4'));
```

#### Sample usage with ffmpeg (fluent-ffmpeg)
``` sh
npm install fluent-ffmpeg
```

``` javascript
var video = require('oddshot');
var ffmpeg = require('fluent-ffmpeg');

ffmpeg(video('http://oddshot.tv/shot/dreamhackcs-20150920202118125'))
  .seekInput('00:07')
  .duration('14')
  .output('output.mp4')
  .run();
```
#### License
MIT
