import { Category } from "./category-model";



export class Product {



  constructor() { }

  id: number;
  code: string;
  category_id: string;
  category: Category;
  brand: string;
  observation: string;
  description: string;
  salePrice:number
}
