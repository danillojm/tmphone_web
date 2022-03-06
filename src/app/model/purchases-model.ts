import { PlatformPurchases } from "./platform-purchases-model";
import { Product } from './product-model';



export class Purchases {


  id: number;
  purchaseDate: Date;
  platformpurchase_id: number;
  platformPurchases: PlatformPurchases;
  storeName: string;
  orderId: string;
  product_id: number;
  product: Product;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  trackingCode: string;
  observation: string;
  status: string;
  productArrived = false;

}
