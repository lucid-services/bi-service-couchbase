const Service      = require('bi-service');
const CouchbaseODM = require('kouchbase-odm');
const path         = require("path");

const RegExpKey = require('./regExpKey.js');
const Cluster   = require('./cluster.js');

module.exports                  = Cluster;
module.exports.CouchbaseCluster = Cluster;
module.exports.RegExpKey        = RegExpKey;
module.exports.CouchbaseODM     = CouchbaseODM;
