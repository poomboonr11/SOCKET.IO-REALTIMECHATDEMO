//websocketServer
const { Server } = require('socket.io');

// สร้าง Socket.IO server
const io = new Server();

// เชื่อมต่อกับ event ของ Socket.IO
io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });

  socket.on('chat message', (msg) => {
    console.log('message: ' + msg);
    // EMIT EVENT
    io.emit('chat message', msg); // ส่งข้อมูลกลับไปที่ทุก client
  });
});

module.exports = io;
