import { EmitEvents, ListeningEvents } from "@/socket/socket.events";
import { ICreateCustomer } from "@/typings/interfaces/customer/customer.interface";
import { ICreateItem } from "@/typings/interfaces/items/items.interface";
import { ICreateOrder } from "@/typings/interfaces/order/order.interface";
import { Socket, io } from "socket.io-client";

class BaseService {
  protected httpBaseUrl: string = "http://localhost:8001";
  private socket: Socket<ListeningEvents, EmitEvents> = io(
    process.env.BACKEND_URL || "http://localhost:8001"
  );

  // Cutomer Queries
  public createCustomer(customer: ICreateCustomer): void {
    this.socket.emit("customer:create", customer);
  }

  // Item Queries
  public createItem(item: ICreateItem): void {
    this.socket.emit("item:create", item);
  }

  // Order Queries
  public createOrder(order: ICreateOrder): void {
    this.socket.emit("order:create", order);
  }

  public getSocket(): Socket<ListeningEvents, EmitEvents> {
    return this.socket;
  }
}

const baseService = new BaseService();
export { baseService, BaseService };
