const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const mqtt = require("mqtt");
const cors = require("cors");

const app = express();

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*"
    }
});

// ===============================
// MQTT
// ===============================
const mqttClient = mqtt.connect("mqtt://mosquitto:1883");

mqttClient.on("connect", () => {

    console.log("MQTT connected");

    mqttClient.subscribe("esp32/led/state");
});

mqttClient.on("message", (topic, message) => {

    const payload = message.toString();

    console.log(topic, payload);

    io.emit("mqtt_message", {
        topic,
        payload
    });
});

// ===============================
// API
// ===============================
app.get("/", (req, res) => {

    res.send("IoT Backend Running");
});

// ===============================
// WebSocket
// ===============================
io.on("connection", (socket) => {

    console.log("WebSocket client connected");

    socket.on("led_control", (state) => {

        mqttClient.publish(
            "esp32/led/set",
            state
        );
    });
});

// ===============================
// START
// ===============================
server.listen(3000, () => {

    console.log("Server running on port 3000");
});