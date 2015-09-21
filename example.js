var video = require('./video');
var ffmpeg = require('fluent-ffmpeg');

ffmpeg(video('http://oddshot.tv/shot/dreamhackcs-20150920202118125'))
  .seekInput('00:07')
  .duration('14')
  .output('output.mp4')
  .run();
