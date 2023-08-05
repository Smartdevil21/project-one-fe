import { BaseService } from "@/services/base.service";
import {
  ICreateCustomer,
  ICustomer,
} from "@/typings/interfaces/customer/customer.interface";

class CustomerService extends BaseService {
  public createCustomer(customer: ICreateCustomer): void {
    // this.socket.emit("customer:create", customer);
    console.log(this.socket);
  }
}

export { CustomerService };
