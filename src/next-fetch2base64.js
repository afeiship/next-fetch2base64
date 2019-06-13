(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');
  var nxBlob2base64 = nx.blob2base64 || require('next-blob2base64');
  var DEFAULT_OPTIONS = {
    method: 'GET',
    data: null,
    callback: function(inBlob) {
      var size = inBlob.size;
      return inBlob.slice(0, size, 'image/png');
    }
  };

  var NxFetch2base64 = nx.declare('nx.Fetch2base64', {
    statics: {
      request: function(inUrl, inOptions) {
        var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);
        var xhr = new XMLHttpRequest();
        xhr.open(options.method, inUrl);
        xhr.responseType = 'blob';
        xhr.send(options.data);

        return new Promise(function(resolve, reject) {
          xhr.onload = function() {
            nxBlob2base64(this.response, { callback: options.callback }).then(function(res) {
              resolve(res);
            });
          };

          xhr.onerror = function(err) {
            reject(err);
          };
        });
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxFetch2base64;
  }
})();
