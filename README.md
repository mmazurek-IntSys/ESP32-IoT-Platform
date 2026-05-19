# ESP32 IoT Platform 
A full-stack IoT platform based on: 
- ESP32 firmware (Arduino)
-  MQTT (Mosquitto)
-  Node.js backend
-  WebSocket real-time communication
-  React frontend
-  Home Assistant integration
-  Docker Compose infrastructure 
This project demonstrates a modern real-time IoT architecture for smart 
home and embedded systems development.

# Features 

## ESP32 Firmware
- WiFi connectivity
- MQTT communication
- LED control
- Real-time state updates - Auto reconnect
  
## Backend (Node.js) 
- MQTT client
- WebSocket server
- Real-time device communication
- REST-ready architecture 

## Frontend (React) 
- Real-time dashboard
- Live MQTT updates
- Device control panel
- Socket.IO integration 

## Home Assistant 
- MQTT integration
- Smart home automation
- Device state synchronization 

## Docker Infrastructure 
- Mosquitto broker
- Backend service
- Frontend service
- Home Assistant service 

# Architecture 

ESP32 <----MQTT----> Mosquitto 
| 
| 
Node.js Backend 
MQTT + WebSocket 
| 
Socket.IO/WebSocket 
| 
React Frontend 
| 
Home Assistant 
Project Structure 
iot-platform/ 
├── docker-compose.yml 
│ 
├── mosquitto/ 
│   └── config/ 
│       └── mosquitto.conf 
│ 
├── backend/ 
│   ├── Dockerfile 
│   ├── package.json 
│   └── server.js 
│ 
├── frontend/ 
│   ├── Dockerfile 
│   ├── package.json 
│   ├── vite.config.js 
│   ├── index.html 
│   └── src/ 
│       ├── main.jsx 
│       └── App.jsx 
│ 
├── homeassistant/ 
│   └── configuration.yaml 
│ 
└── esp32/ 
├── platformio.ini 
└── src/ 
└── main.cpp 

## Requirements 
Software 
- Docker
- Docker Compose  
- Node.js 20+  
- VS Code  
- PlatformIO extension  

Hardware 
- ESP32 development board  

## Installation 
Clone repository 
git clone https://github.com/YOUR_USERNAME/esp32-iot-platform.git 
cd esp32-iot-platform 
Start Docker Services 
docker compose up -d --build 

This starts: 
- Mosquitto MQTT broker  
- Node.js backend  
- React frontend  
- Home Assistant  

## Frontend 
Open: 
http://localhost:5173 

Backend API 
http://localhost:3000 

Home Assistant 
http://localhost:8123 

## ESP32 Setup 
Open the esp32 folder in VS Code using PlatformIO. 

Edit WiFi credentials inside: 
const char* ssid = "YOUR_WIFI"; 
const char* password = "YOUR_PASSWORD"; 

Edit MQTT broker IP: 
const char* mqtt_server = "YOUR_SERVER_IP"; 

Build and upload firmware: 
pio run --target upload 

Open serial monitor: 
pio device monitor 
MQTT Topics 

Commands 
esp32/led/set 

Payload: 
ON 
OFF 
State 
esp32/led/state 

## Example MQTT Test 
Turn LED ON: 
mosquitto_pub -h localhost -t esp32/led/set -m ON 
Turn LED OFF: 
mosquitto_pub -h localhost -t esp32/led/set -m OFF 

## Technologies Used 
Embedded 
- ESP32  
- Arduino Framework  
- PubSubClient  

Backend 
- Node.js  
- Express  
- MQTT.js  
- Socket.IO  

Frontend 
- React  
- Vite  
- Socket.IO Client  

## Infrastructure 
- Docker  
- Docker Compose  
- Mosquitto MQTT  
- Home Assistant  

## Future Improvements 
- OTA firmware updates  
- TLS/SSL security  
- Authentication system  
- Device management  
- Sensor telemetry  
- Database integration  
- Grafana dashboards  
- InfluxDB  
- Kubernetes deployment  
- Mobile application  
- Multi-device support  
- MQTT auto discovery  
- Zigbee integration  
- ESP32-CAM support  

