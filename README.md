[![Build Status](https://travis-ci.org/lucid-services/serviser-couchbase.svg?branch=master)](https://travis-ci.org/lucid-services/serviser-couchbase)   

```javascript
const config           = require('serviser-config');
const CouchbaseODM     = require('kouchbase-odm');
const CouchbaseCluster = require('serviser-couchbase');

var cluster = new CouchbaseCluster(config.get('storage:couchbase'));

var odm = new CouchbaseODM({
    bucket: cluster.openBucketSync('default'),
});
```
