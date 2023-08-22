import { useSocket } from "@/hooks/useSocket";
import { ChildrenInterface } from "@/interfaces/ChildrenInterface";
import { createContext, useEffect, useState } from "react"
import { Socket } from "socket.io-client";

export interface SocketContextInterface {
  socket: Socket | null;
  online: boolean;
}

export const SocketContext = createContext<SocketContextInterface>({ 
  socket: null,
  online: false
});

export const SocketProvider = ({ children }: ChildrenInterface) => {

  const { socket, online, connectSocket } = useSocket('ws://localhost:3000');

  useEffect(() => {
    connectSocket();
  }, [connectSocket]);

  return (
    <SocketContext.Provider value={{socket, online}}>
      {children}
    </SocketContext.Provider>
  )
}