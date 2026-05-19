#include <Arduino.h>
#include <WiFi.h>
#include <PubSubClient.h>

const char* ssid = "YOUR_WIFI";
const char* password = "YOUR_PASSWORD";

const char* mqtt_server = "192.168.1.100";

WiFiClient espClient;
PubSubClient client(espClient);

const int LED_PIN = 2;

void setupWiFi()
{
    WiFi.begin(ssid, password);

    while (WiFi.status() != WL_CONNECTED)
    {
        delay(500);
    }
}

void callback(
    char* topic,
    byte* payload,
    unsigned int length)
{
    String msg;

    for (unsigned int i = 0; i < length; i++)
    {
        msg += (char)payload[i];
    }

    if (msg == "ON")
    {
        digitalWrite(LED_PIN, HIGH);

        client.publish(
            "esp32/led/state",
            "ON"
        );
    }
    else
    {
        digitalWrite(LED_PIN, LOW);

        client.publish(
            "esp32/led/state",
            "OFF"
        );
    }
}

void reconnect()
{
    while (!client.connected())
    {
        if (client.connect("esp32"))
        {
            client.subscribe("esp32/led/set");
        }
        else
        {
            delay(5000);
        }
    }
}

void setup()
{
    Serial.begin(115200);

    pinMode(LED_PIN, OUTPUT);

    setupWiFi();

    client.setServer(
        mqtt_server,
        1883
    );

    client.setCallback(callback);
}

void loop()
{
    if (!client.connected())
    {
        reconnect();
    }

    client.loop();
}