import S3Bucket from 'appkit/models/bucket';
import formatByte from 'appkit/helpers/formatBytes';
import formatDateTime from 'appkit/helpers/formatDateTime';

var ReleasesRoute = Ember.Route.extend({
  model: function() {
    var bucket = S3Bucket.create({
      title: 'Latest Release Builds',
      bucket: 'builds.emberjs.com',
      endpoint: 's3.amazonaws.com',
      prefix: 'tags/',
      delimiter: '/',
      useSSL: false
    });
    return bucket;
  }
});

export default ReleasesRoute;