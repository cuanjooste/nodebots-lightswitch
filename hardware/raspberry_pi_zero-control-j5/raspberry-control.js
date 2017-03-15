"use strict";
const Raspi = require('raspi-io');
var five = require("johnny-five");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var socket = require("socket.io")(server);

var console_prefix = "++ Raspberry Pi Zero Control - ";

var board = new five.Board({
  io: new Raspi()
});

board.on("ready", () => {

  console.log(console_prefix + "BOARD READY");

  var led_1 = new five.Led('P1-11');
  var led_2 = new five.Led('P1-13');

  socket.on('connect', function(socket)
  {
    console.log(console_prefix + '- Raspberry has made a Socket Connection');

    // RECEIVE COLLECTION
    socket.on('light_toggle', function(light_id)
    {
        switch(light_id)
        {
          case 1:
              led_1.toggle();
              break;
          case 2:
              led_2.toggle();
              break;
        }
    });

  });

});

// RUN SERVER
server.listen(4000,() => {
  console.log('Started server at port:4000');
});