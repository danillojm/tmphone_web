import { Address } from "./address-model";

export interface Client {

  id:number;
  name: string;
  phoneNumber: string;
  email: string;
  cpf: string;
  observation: string;
  address: Address
}
