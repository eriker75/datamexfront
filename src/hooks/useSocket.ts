import { useCallback, useEffect, useState } from 'react';
import { Socket, io } from 'socket.io-client';


export const useSocket = (serverPath: string) => {

  const [socket, setSocket] = useState<Socket | null>(null);
  const [online, setOnline] = useState<boolean>(false);

  const connectSocket = useCallback(() => {
    const socketTemp = io(serverPath, {
      transports: ['websocket'],
      autoConnect: true,
      forceNew: true,
    });
    setSocket(socketTemp);
  }, [serverPath]);

  const disconnectSocket = useCallback(() => {
    socket?.disconnect();
  }, [socket]);


  useEffect(() => {
    if (socket?.connected) {
      setOnline(true);
    } else {
      setOnline(false)
    }
  }, [socket])

  useEffect(() => {
    socket?.on('connect', () => setOnline(true));
  }, [socket])

  useEffect(() => {
    socket?.on('disconnect', () => setOnline(false));
  }, [socket])

  return {
    socket,
    online,
    connectSocket,
    disconnectSocket
  }
}