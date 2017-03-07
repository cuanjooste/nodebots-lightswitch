"use strict";
const Tessel = require("tessel-io");
var five = require("johnny-five");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var socket = require("socket.io")(server);

var console_prefix = "++ Tessel Control - ";

var board = new five.Board({
  io: new Tessel()
});

board.on("ready", () => {

  console.log(console_prefix + "BOARD READY");
  var photoresistor = new five.Sensor({
    pin: "B0",
    freq: 2000
  });
  
  var led_1 = new five.Led("A0");
  var led_2 = new five.Led("A1");


  socket.on('connect', function(socket)
  {
    console.log(console_prefix + '- Tessel has made a Socket Connection');

    // EMIT COLLECTION
    photoresistor.on("data", function() {
      socket.emit("light_intensity_update",this.value);
    });
    
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