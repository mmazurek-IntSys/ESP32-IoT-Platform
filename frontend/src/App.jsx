import { useEffect, useState } from "react";

import { io } from "socket.io-client";

const socket = io("http://localhost:3000");

export default function App()
{
    const [ledState, setLedState] = useState("OFF");

    useEffect(() => {

        socket.on("mqtt_message", (data) => {

            if (data.topic === "esp32/led/state")
            {
                setLedState(data.payload);
            }
        });

    }, []);

    const toggleLed = () => {

        const newState =
            ledState === "ON"
                ? "OFF"
                : "ON";

        socket.emit(
            "led_control",
            newState
        );
    };

    return (
        <div
            style={{
                fontFamily: "Arial",
                padding: 40
            }}
        >
            <h1>ESP32 Control Panel</h1>

            <h2>
                LED State: {ledState}
            </h2>

            <button
                onClick={toggleLed}
                style={{
                    padding: 20,
                    fontSize: 20
                }}
            >
                Toggle LED
            </button>
        </div>
    );
}