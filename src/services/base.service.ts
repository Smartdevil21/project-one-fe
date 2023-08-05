import { EmitEvents, ListeningEvents } from "@/socket/socket.events";
import { ICreateCustomer } from "@/typings/interfaces/customer/customer.interface";
import { Socket, io } from "socket.io-client";

class BaseService {
  protected socket: Socket<ListeningEvents, EmitEvents> = io(
    process.env.BACKEND_URL || "http://localhost:8001"
  );

  public createCustomer(customer: ICreateCustomer): void {
    this.socket.emit("customer:create", customer);
  }

  public getSocket(): Socket<ListeningEvents, EmitEvents> {
    return this.socket;
  }
}

const baseService = new BaseService();
export { baseService, BaseService };
