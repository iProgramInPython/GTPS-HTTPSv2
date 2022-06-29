// This is a new HTTPS made by me
// HUGE Credits to AltanB (this is the base of his source.)
// This is tested and probably will work. 
// If you have any questions/supports please message me :)
// This is an ADVANVED HTTPS which now has logging and more!
// Any questions? Please message me!
// If you wanna use this please givve me credits.
// Made with love.
// Also all text is customized which just looks cool lol
// This is MIT Licensed
const fs = require('fs');
const keyperm = fs.readFileSync('./key.pem');
const certperm = fs.readFileSync('./cert.pem');

const express = require('express');
const app = express();

const http = require("http");
const https = require('https');
const server = https.createServer({ keyperm, certperm }, app);
const port = 443;
const prompt = require("prompt-sync")();

const ipvps = prompt("VPS IP : ");
const udpport = prompt("UDP Port (Default 17091) : ");
let data = `server|${ipvps}\nport|${udpport}\ntype|1\n#maint|Server is under maintenance. We will be back online shortly. Thank you for your patience!\n\nbeta_server|127.0.0.1\nbeta_port|17091\n\nbeta_type|1\nmeta|localhost\nRTENDMARKERBS1001\n`;

const php = `
server|${ipvps}
port|${udpport}
type|1
#maint|Server is under maintenance. We will be back online shortly. Thank you for your patience!
beta_server|127.0.0.1
beta_port|17091

beta_type|1
meta|defined
RTENDMARKERBS1001|unknown
`;


app.post("/growtopia/server_data.php", (req, res) => {
  res.status(200).send(php).end();
});

// don't accept all method
app.use((req, res) => {
  res.status(200).send(php).end();
});
server.listen(port, () => {
  console.log(text);
});

const servers = http.createServer(function(req, res) {
    if (req.url == "/") {
        if (req.method == "GET") {
            res.writeHead(200);
            res.write("HTTPS - GTPS");
            console.log(weblog)
            res.end();
        }
    }
    else if (req.url == "/growtopia/server_data.php") {
        if (req.method == "POST") {
            res.write(data);
            console.log(serverlog) // not sure if this works tho.
            res.end();
        }
        else {
            res.writeHead(404);
            res.write("You cant access that");
            return res.end();
        }
    }
    else {
        res.writeHead(404);
        res.write("404 Not Found");
        return res.end();
    }
});
servers.listen(80);



let text = `

░██████╗░████████╗██████╗░░██████╗  ██╗░░██╗████████╗████████╗██████╗░░██████╗
██╔════╝░╚══██╔══╝██╔══██╗██╔════╝  ██║░░██║╚══██╔══╝╚══██╔══╝██╔══██╗██╔════╝
██║░░██╗░░░░██║░░░██████╔╝╚█████╗░  ███████║░░░██║░░░░░░██║░░░██████╔╝╚█████╗░
██║░░╚██╗░░░██║░░░██╔═══╝░░╚═══██╗  ██╔══██║░░░██║░░░░░░██║░░░██╔═══╝░░╚═══██╗
╚██████╔╝░░░██║░░░██║░░░░░██████╔╝  ██║░░██║░░░██║░░░░░░██║░░░██║░░░░░██████╔╝
░╚═════╝░░░░╚═╝░░░╚═╝░░░░░╚═════╝░  ╚═╝░░╚═╝░░░╚═╝░░░░░░╚═╝░░░╚═╝░░░░░╚═════╝░

`


let weblog = `

░█████╗░██╗░░░░░██╗███████╗███╗░░██╗████████╗  ██╗░░██╗░█████╗░░██████╗
██╔══██╗██║░░░░░██║██╔════╝████╗░██║╚══██╔══╝  ██║░░██║██╔══██╗██╔════╝
██║░░╚═╝██║░░░░░██║█████╗░░██╔██╗██║░░░██║░░░  ███████║███████║╚█████╗░
██║░░██╗██║░░░░░██║██╔══╝░░██║╚████║░░░██║░░░  ██╔══██║██╔══██║░╚═══██╗
╚█████╔╝███████╗██║███████╗██║░╚███║░░░██║░░░  ██║░░██║██║░░██║██████╔╝
░╚════╝░╚══════╝╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░

██╗░░░░░░█████╗░░██████╗░░██████╗░███████╗██████╗░  ██╗░░░██╗██╗░█████╗░  ░██╗░░░░░░░██╗███████╗██████╗░
██║░░░░░██╔══██╗██╔════╝░██╔════╝░██╔════╝██╔══██╗  ██║░░░██║██║██╔══██╗  ░██║░░██╗░░██║██╔════╝██╔══██╗
██║░░░░░██║░░██║██║░░██╗░██║░░██╗░█████╗░░██║░░██║  ╚██╗░██╔╝██║███████║  ░╚██╗████╗██╔╝█████╗░░██████╦╝
██║░░░░░██║░░██║██║░░╚██╗██║░░╚██╗██╔══╝░░██║░░██║  ░╚████╔╝░██║██╔══██║  ░░████╔═████║░██╔══╝░░██╔══██╗
███████╗╚█████╔╝╚██████╔╝╚██████╔╝███████╗██████╔╝  ░░╚██╔╝░░██║██║░░██║  ░░╚██╔╝░╚██╔╝░███████╗██████╦╝
╚══════╝░╚════╝░░╚═════╝░░╚═════╝░╚══════╝╚═════╝░  ░░░╚═╝░░░╚═╝╚═╝░░╚═╝  ░░░╚═╝░░░╚═╝░░╚══════╝╚═════╝░

`

let serverlog = `

░█████╗░██╗░░░░░██╗███████╗███╗░░██╗████████╗  ██╗░░██╗░█████╗░░██████╗
██╔══██╗██║░░░░░██║██╔════╝████╗░██║╚══██╔══╝  ██║░░██║██╔══██╗██╔════╝
██║░░╚═╝██║░░░░░██║█████╗░░██╔██╗██║░░░██║░░░  ███████║███████║╚█████╗░
██║░░██╗██║░░░░░██║██╔══╝░░██║╚████║░░░██║░░░  ██╔══██║██╔══██║░╚═══██╗
╚█████╔╝███████╗██║███████╗██║░╚███║░░░██║░░░  ██║░░██║██║░░██║██████╔╝
░╚════╝░╚══════╝╚═╝╚══════╝╚═╝░░╚══╝░░░╚═╝░░░  ╚═╝░░╚═╝╚═╝░░╚═╝╚═════╝░

██╗░░░░░░█████╗░░██████╗░░██████╗░███████╗██████╗░  ██╗░░░██╗██╗░█████╗░
██║░░░░░██╔══██╗██╔════╝░██╔════╝░██╔════╝██╔══██╗  ██║░░░██║██║██╔══██╗
██║░░░░░██║░░██║██║░░██╗░██║░░██╗░█████╗░░██║░░██║  ╚██╗░██╔╝██║███████║
██║░░░░░██║░░██║██║░░╚██╗██║░░╚██╗██╔══╝░░██║░░██║  ░╚████╔╝░██║██╔══██║
███████╗╚█████╔╝╚██████╔╝╚██████╔╝███████╗██████╔╝  ░░╚██╔╝░░██║██║░░██║
╚══════╝░╚════╝░░╚═════╝░░╚═════╝░╚══════╝╚═════╝░  ░░░╚═╝░░░╚═╝╚═╝░░╚═╝

░██████╗███████╗██████╗░██╗░░░██╗███████╗██████╗░
██╔════╝██╔════╝██╔══██╗██║░░░██║██╔════╝██╔══██╗
╚█████╗░█████╗░░██████╔╝╚██╗░██╔╝█████╗░░██████╔╝
░╚═══██╗██╔══╝░░██╔══██╗░╚████╔╝░██╔══╝░░██╔══██╗
██████╔╝███████╗██║░░██║░░╚██╔╝░░███████╗██║░░██║
╚═════╝░╚══════╝╚═╝░░╚═╝░░░╚═╝░░░╚══════╝╚═╝░░╚═╝

`