import { BaseService } from "@/services/base.service";
import { ICreateItem, IItem } from "@/typings/interfaces/items/items.interface";
import axios from "axios";

class ItemService extends BaseService {
  public async createItem(item: ICreateItem): Promise<IItem[] | void> {
    try {
      const result = await axios.post(`${this.httpBaseUrl}/item`, item);
      console.log(result.data);
      return result.data;
    } catch (error) {
      console.error(`Err in creating item: ${error}`);
    }
  }
}

const itemService = new ItemService();

export { itemService };
