import { Socket, io } from "socket.io-client";

class BaseService{
    private socket: Socket = io(process.env.BACKEND_URL || "http://localhost:8001");

    // constructor() {
    //     this.socket = io(process.env.BACKEND_URL || "http://localhost:8001")
    // }

    public getSocket():Socket {
        return this.socket;
    }
}

const baseService = new BaseService();
export {baseService, BaseService}

