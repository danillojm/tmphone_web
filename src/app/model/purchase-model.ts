import { PlatformPurchase } from './platform-purchase-model';
import { Product } from './product-model';



export class Purchase {


  id: number;
  purchaseDate: Date;
  platformpurchase_id: number;
  platformPurchase: PlatformPurchase;
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
  color:string
}
