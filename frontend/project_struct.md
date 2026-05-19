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