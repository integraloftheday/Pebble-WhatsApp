#!/bin/bash 

echo "Creating Node.js Folder"

mkdir PebbleWhatsApp

echo "Downloading Required Files"

curl -o PebbleWhatsApp/app.js https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/app.js

curl -o PebbleWhatsApp/config.json https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/config.json 

curl -o PebbleWhatsApp/package.json https://raw.githubusercontent.com/integraloftheday/Pebble-WhatsApp/master/WhatsAppServer/package.json 

npm install --prefix PebbleWhatsApp/ 

echo "Now edit config.json to add contacts, to change the port number, and to set the key" 

echo "Use node app.js to start the server in side PebbleWahtsApp"



