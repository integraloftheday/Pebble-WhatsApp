#!/bin/bash 

echo "Creating Node.js Folder"

mkdir PebbleWhatsAppServer

echo "Downloading Required Files"

curl -o PebbleWhatsAppServer/app.js https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/app.js

curl -o PebbleWhatsAppServer/config.json https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/config.json 

curl -o PebbleWhatsAppServer/package.json https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/package.json 

npm install --prefix PebbleWhatsAppServer/ 

echo "Now edit config.json to add contacts, to change the port number, and to set the key" 

echo "Use node app.js to start the server inside PebbleWhatsAppServer"



