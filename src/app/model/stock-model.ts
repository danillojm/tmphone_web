import { Product } from "./product-model"
import { Purchase } from "./purchase-model"

export interface Stock {

  id: number
  product_id: number
  product: Product
  quantity: number
  unitPrice: number
  totalPrice: number
  color: string
  brand: string
  purchase_id: number
  purchase: Purchase


}
