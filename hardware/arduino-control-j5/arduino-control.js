"use strict"

var five = require("johnny-five");
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var socket = require("socket.io")(server);

var console_prefix = "++ Arduino Controller - ";

var board = new five.Board({
  port: "COM3"
});

board.on("ready", () => {
  
  console.log(console_prefix + "BOARD READY");
  var photoresistor = new five.Sensor({
    pin: "A0",
    freq: 2000
  });

  var led_1 = new five.Led(9);
  var led_2 = new five.Led(10);

	socket.on('connect', function(socket)
  {
      console.log(console_prefix + 'Connection Made');

      // EMIT COLLECTION
      photoresistor.on("data", function() {
        socket.emit("light_intensity_update",this.value);
      });
      
      // RECEIVE COLLECTION
      socket.on('light_toggle', function(light_id)
      {
        switch(light_id) {
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
server.listen(4040,() => {
  console.log('Started server at port:4040');
});