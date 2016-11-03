'use strict';

const version = require('./version.json');
const express = require('express');
var os = require('os');
var ifaces = os.networkInterfaces();

const app = express();

app.get('/', (req, res) => {
  let result = `Hello world from TopSwagCode! We are currently running version: ${version.version}` + "<br/>";

  
Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
    if ('IPv4' !== iface.family || iface.internal !== false) {
      result += ifname + ':' + alias +"," +iface.address + " COUNT: " + alias  +"<br/>";
    }

    if (alias >= 1) {
      // this single interface has multiple ipv4 addresses
      result +=ifname + ':' + alias +"," + iface.address+ " COUNT: " + alias + "<br/>";
    } else {
      // this interface has only one ipv4 adress
      result += ifname + "," + iface.address+ " COUNT: " + alias + "<br/>";
    }
    ++alias;
  });
});


  res.send(result);
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});
