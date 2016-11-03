'use strict';

const version = require('./version.json');
const express = require('express');
var os = require('os');
var ifaces = os.networkInterfaces();

const app = express();

app.get('/', (req, res) => {
  let result = `Hello world from TopSwagCode! We are currently running version: ${version.version}` + os.EOL;

  Object.keys(ifaces).forEach(function (ifname) {
  var alias = 0;

  ifaces[ifname].forEach(function (iface) {
      if ('IPv4' !== iface.family || iface.internal !== false) {
        // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
        return;
      }

      if (alias >= 1) {
        // this single interface has multiple ipv4 addresses
        result += "IP "  + ifname + ':' + alias, iface.address + os.EOL;
      } else {
        // this interface has only one ipv4 adress
        result += "IP "  + ifname, iface.address + os.EOL;
      }
      ++alias;
    });
  });


  res.send(result);
});

app.listen(80, () => {
  console.log('Example app listening on port 80!');
});
