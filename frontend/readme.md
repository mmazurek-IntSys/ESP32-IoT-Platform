# ESP32 IoT Platform

A full-stack IoT platform based on:

- ESP32 firmware (Arduino)
- MQTT (Mosquitto)
- Node.js backend
- WebSocket real-time communication
- React frontend
- Home Assistant integration
- Docker Compose infrastructure

This project demonstrates a modern real-time IoT architecture for smart home and embedded systems development.

---

# Features

## ESP32 Firmware

- WiFi connectivity
- MQTT communication
- LED control
- Real-time state updates
- Auto reconnect

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

---

# Architecture

```text
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