import io, { Socket } from 'socket.io-client';
import host from "./host.json"
let socket: Socket;


export const initiateSocket = (room: string) => {
  socket = io(host.host);
  console.log(`Connecting socket...`);
  if (socket && room) socket.emit('join', room);
}

export const disconnectSocket = () => {
  console.log('Disconnecting socket...');
  if(socket) socket.disconnect();
}