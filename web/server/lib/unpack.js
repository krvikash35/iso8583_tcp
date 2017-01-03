'use strict'
var configlib = require('./config');
var convlib = require('./convert');
var logService = require('../logService');

var unpacklib = {
    req_init_gen_bitmap: req_init_gen_bitmap,
    req_encode_request_fields: req_encode_request_fields,
    req_add_header: req_add_header
}
module.exports = unpacklib;
