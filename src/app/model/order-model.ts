import { Client } from "./client-model";
import { Product } from "./product-model";

export interface Order{


  id : number;
  orderDate: Date;
  client : Client
  product : Product;
  status : string;
  observation: string;


}
