'use strict';

const conditions = {
    'no-throttle': {
        offline: false,
        downloadThroughput: -1,
        uploadThroughput: -1,
        latency: 0
    },
    'regular-3g': {
        offline: false,
        downloadThroughput: 750000,
        uploadThroughput: 250000,
        latency: 100
    },
    'fast-3g': {
        offline: false,
        downloadThroughput: 10000000,
        uploadThroughput: 750000,
        latency: 40
    },
    'regular-4g': {
        offline: false,
        downloadThroughput: 400000000,
        uploadThroughput: 1000000,
        latency: 20
    },
    
};

module.exports = conditions;