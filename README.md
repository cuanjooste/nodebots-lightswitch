# Nodebots-lightswitch

A simple example of using Node.js to create a connected system for Arduino Uno, Tessel 2 and Raspberry PI Zero W. Utilizing Vue.js for the web application, socket IO for communication and Johnny Five as a hardware platform.

## Getting Started

ARDUINO
- Node v5.10.0
- STEPS
	- npm install
	- node arduino-control.js

TESSEL
- Node v5.10.0
- STEPS
	- npm install
	- t2 run tessel-control.js

RASPBERRY PI ZERO
- Node v7.7.1
	- Installing Node - https://github.com/sdesalas/node-pi-zero
	- Install Raspi-io & Johnny Five - https://github.com/nebrius/raspi-io
- STEPS
	- npm install
	- sudo node raspberry-control.js



WEBAPP
- Uses Vue-Cli Webpack Simple Template
- Node v7.4.0
- STEPS
	- npm install
	- npm run dev


This example can only control 1 piece of hardware at a time. To switch between devices, please comment out the appropriate line in WebApp/src/main.js. I have also included a basic component layout that was used for all 3 devices, the only difference is that the Raspberry PI Zero does not read data from the photocell.

### Prerequisites

- Node.js, npm , Tessel CLI


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

