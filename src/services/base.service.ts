import { EmitEvents, ListeningEvents } from "@/socket/socket.events";
import { ICreateCustomer } from "@/typings/interfaces/customer/customer.interface";
import { ICreateItem } from "@/typings/interfaces/items/items.interface";
import {
  ICreateOrder,
  IUpdateOrder,
} from "@/typings/interfaces/order/order.interface";
import { ICreateTransaction } from "@/typings/interfaces/transaction/transaction.interface";
import { Socket, io } from "socket.io-client";

class BaseService {
  private backendUrl: string =
    process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:8001";
  protected httpBaseUrl: string = this.backendUrl;
  private socket: Socket<ListeningEvents, EmitEvents> = io(this.backendUrl);

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
  public updateOrder(updatedOrder: IUpdateOrder): void {
    this.socket.emit("order:update", updatedOrder);
  }
  public deleteOrder(row_id: number): void {
    this.socket.emit("order:delete", row_id);
  }

  // transaction queries
  public createTransaction(transaction: ICreateTransaction): void {
    this.socket.emit("transaction:create", transaction);
  }

  public getSocket(): Socket<ListeningEvents, EmitEvents> {
    return this.socket;
  }
}

const baseService = new BaseService();
export { baseService, BaseService };
