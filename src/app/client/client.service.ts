import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { LocalDataSource } from "ng2-smart-table";
import { Observable } from "rxjs";
import { Client } from "../model/client-model";

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  baseUrl = "http://localhost:3000/clients";

  client: Client

  //source: LocalDataSource

  constructor(private http: HttpClient) {

  }


  setClient(client: Client) {
    this.client = client;
  }
  getclient() {
    return this.client;
  }

  getSource(): LocalDataSource {

    let source = new LocalDataSource();
    let clientSourceData: clientSource[] = [];
    this.getClients().subscribe((clients) => {

      clients.forEach(client => {

        let clientSource = {} as clientSource;

        clientSource.id = client.id;
        clientSource.name = client.name;
        clientSource.phoneNumber = client.phoneNumber;
        clientSource.email = client.email;
        clientSource.cpf = client.cpf;
        clientSource.observation = client.observation;
        clientSourceData.push(clientSource);
      })
      source.load(clientSourceData)
    })

    return source;
  }

  getClients(): Observable<Client[]> {
    return this.http.get<Client[]>(this.baseUrl)
  }

  addClient(client: Client): Observable<Client> {
    return this.http.post<Client>(this.baseUrl, client);
  }

  getClientById(id: number): Observable<Client> {

    return this.http.get<Client>(this.baseUrl + "/" + id);

  }

  update(client: Client): Observable<Client> {
    return this.http.put<Client>(this.baseUrl + "/" + client.id, client);
  }
  delete(id: number): Observable<Client> {

    return this.http.delete<Client>(this.baseUrl + "/" + id);
  }
}
class clientSource {

  id: number;
  name: string;
  phoneNumber: string;
  email: string;
  cpf: string;
  observation: string;
}
