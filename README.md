# Pebble-Imessager

A [PebbleJs](https://github.com/pebble/pebblejs) and Server Application to allow WhatsApp chatting on microphone enabled pebble smartwatches. 

## Demo

![](Demo.gif)

## About

Using this watch app and server microphone enabled pebbles can reply to WhatApp messages. Based on [GitHub - integraloftheday/Pebble-Imessager: A PebbleJs and Server Application to allow imessage texting on pebble smart watches](https://github.com/integraloftheday/Pebble-Imessager)

## A Security Note

In the current state all server requests are sent over http which is not encrypted. In the future it is planed 
to update this to https to ensure fully encrypted requests. In the meantime, it is recommended to only use this application over local
networks or use a VPN to establish a secure connection to a local network. 

## Server Installation

### Requirments

1. A computer / raspberry pi (Anything that can run node.js)
2. [Node.js]((https://nodejs.org/en/)) installed 

### Steps

The easiest way is to use the install.sh script. It only downloads the required files. 

1. `curl -o install.sh https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/installer.sh` 

2. `sh install.sh`  The server will install inside the directory "PebbleWhatsAppServer"

3. `cd PebbleWhatsAppServer` 

4. `node app.js`  Run the server

5. Scan the QR code with your phone connecting WhatsApp

To keep the server running [screen](http://www.kinnetica.com/2011/05/29/using-screen-on-mac-os-x/) can be used. 

### Configuration

Inside the `PebbleWhatsAppServer` folder there is a file `config.json` which included everything that needs to configured. The file looks like: 

```json
{
"key":"abc",
"port":5000,
"saveLogin":false,
"contacts":[
    {
        "buddyName":"Demo",
        "displayName":"Demo" 
    },
]
}
```

* `"key"` is generated in the watch app and must be set to the same value.

* `"port"` is what port the server runs on

* `"saveLogin"` if set to `true` the server will remember the WhatsApp login. 

* `"contacts"` is the list of everyone the watch app can message. 
  
  * `"buddyName"` is the WhatsApp id for each contact/group. It follows this pattern for an individual `[country code][phone number]@s.whatsapp.net` for example, ``19999999999@s.whatsapp.net`. For infromation including for groups can be found here: [GitHub - adiwajshing/Baileys: Lightweight full-featured typescript/javascript WhatsApp Web API](https://github.com/adiwajshing/Baileys#sending-messages).
  
  * `"displayName"`  is what will be displayed in the WatchApp
  
  **Note** when editing `config.json` restarting the server is not needed
  unless the `"port"` has be edited.

```json
{
"key":"abc",
"port":2020,
"contacts":[
    {
        "buddyName":"Homer Simpson",
        "displayName":"Homer" 
    },
  {
        "buddyName":"Marge Simpson",
        "displayName":"Marge" 
    },
    {
        "buddyName":"Bart Simpson",
        "displayName":"Bart" 
    }
]
}
```

## Watch Installation

Currently the watch app needs to be sideloaded but could be added to the rebble store in the future. 

### Requirements

1. A microphone enabled pebble watch 

2. A [rebble voice subscription](https://rebble.io)
   
   ### Side Loading

3. Downloaded the latest .pbw file from the [releases](https://github.com/integraloftheday/Pebble-Imessager/releases) on your phone. 

4. Click the share icon then "more" then select "Copy to Pebble"

The pebble app then will install the watch app. 

### Watch App Configuration

These steps must be done before the watch app can be used. 

1. Click "Settings" and scroll to "Server IP" select and enter the Server's IP address and Port Number
2. Click "key Generate" and updated `config.json` to match the key displayed on the watch app 
3. Click "Contact Fetch" to update the watches internal contacts. This can be done after any update to `config.json`
4. Click "Current" if everything was entered correctly and working the server IP the key and any contacts should be displayed.
5. Send Messages! by clicking on the contacts name on the main menu. 
