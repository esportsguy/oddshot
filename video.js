var request = require('request');
var PassThrough = require('stream').PassThrough;

module.exports = function(link) {
  var stream = new PassThrough();

  request(link, function(err, res, html) {
    var m = html.match(/<source src="(.*)" type="video\/mp4"><p class="vjs-no-js">/);
    var videoUrl = decodeURIComponent(m[1]);

    console.log('downloading from', videoUrl);
    var req = request(videoUrl);

    req.on('response', function(resp) {
      stream.emit('response', resp);
    });

    req.pipe(stream);
  });

  return stream;
};
