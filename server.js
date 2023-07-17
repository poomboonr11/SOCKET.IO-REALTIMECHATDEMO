// server.js
const express = require('express');
const http = require('http');
const app = express(); // เรียกใช้ express

// สร้าง HTTP server สำหรับ Express
const server = http.createServer(app);

// Import WebSocket Server
const io = require('./websocketServer'); // ใช้ path ที่ถูกต้องตามที่อยู่ของ websocketServer.js

// Middleware เชื่อมต่อ Express กับ Socket.IO
io.attach(server);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // ใช้ path ที่ถูกต้องตามที่อยู่ของ index.html
});

const port = 3000;
server.listen(port, () => {
  console.log('Express server running on port 3000');
});
