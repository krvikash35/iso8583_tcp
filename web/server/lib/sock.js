'use strict'
var net = require('net');
var configlib = require('./config');
var logService = require('../logService');

var socklib = {
  createNewSockConnAndSend: createNewSockConnAndSend
}

module.exports = socklib;

function createNewSockConnAndSend(iso8583_msg) {
  logService.logEvent("socklib.createNewSockConnAndSend...create new tcp socket connection and write the buffer!")
  return new Promise(function(fulfill, reject){
    let HOST = configlib.read_config("ser_host");
    let PORT = configlib.read_config("ser_port");
    let timeout = configlib.read_config("per_tcp_timeout");

    logService.logEvent('socklib.createNewSockConnAndSend...CONNECTING TO: ' + HOST + ':' + PORT + " and receive timeout is "+timeout+" second!");
    var client = new net.Socket();
    client.connect(PORT, HOST, function() {
        logService.logEvent("socklib.createNewSockConnAndSend...CONNECTED!")
        client.write(iso8583_msg.request.final_buffer);
        client.setTimeout(timeout*1000)
    });
    client.on('data', function(data) {
        var buffer_data = Buffer.from(data);
        logService.logEvent("socklib.createNewSockConnAndSend..."+buffer_data.length+" BYTE RECEVIED FROM SERVER: , WILL END CONNECTION NOW...", buffer_data.length);
        iso8583_msg.response.final_buffer = buffer_data;
        fulfill(iso8583_msg)
        client.end()
    });
    client.on('timeout', function() {
        logService.logEvent("socklib.createNewSockConnAndSend...TIMEOUT IN RECEIVING RESPONSE FROM SERVER, WILL END CONNECTION...");
        client.end()
        reject(new Error("socklib.createNewSockConnAndSend...TIMEOUT IN RECEIVING RESPONSE FROM SERVER, WILL END CONNECTION..."))
    })
    client.on('close', function() {
        logService.logEvent('socklib.createNewSockConnAndSend...Connection closed');
    });
    client.on('error', function() {
        logService.logEvent('socklib.createNewSockConnAndSend...Connection error, check if given host and port is correct!');
        reject(new Error("socklib.createNewSockConnAndSend...Connection error, check if given host and port is correct!"))
    });

  })
}
