[![Build Status](https://travis-ci.org/BohemiaInteractive/bi-service-couchbase.svg?branch=master)](https://travis-ci.org/BohemiaInteractive/bi-service-couchbase)   

```javascript
const config           = require('bi-config');
const CouchbaseODM     = require('kouchbase-odm');
const CouchbaseCluster = require('bi-service-couchbase');

var cluster = new CouchbaseCluster(config.get('storage:couchbase'));

var odm = new CouchbaseODM({
    bucket: cluster.openBucketSync('default'),
});
```
