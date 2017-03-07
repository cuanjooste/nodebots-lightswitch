# Nodebots-lightswitch

A simple example of using Node.js to create a connected system for Arduino Uno and Tessel 2. Utilizing Vue.js for the web application, socket IO for communication and Johnny Five as a hardware platform.

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


WEBAPP
- Uses Vue-Cli Webpack Simple Template
- Node v7.4.0
- STEPS
	- npm install
	- npm run dev


This example can only control 1 piece of hardware at a time. To switch between the tessel and arduino, please comment out the appropriate line in WebApp/src/main.js

### Prerequisites

- Node.js, npm , Tessel CLI


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

