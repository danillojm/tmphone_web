import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { SystemUser } from "../model/system-user-model";

@Injectable({
  providedIn: 'root'
})
export class SystemUserService {

  baseUrl = "http://localhost:3000/systemUsers";
  constructor(private http: HttpClient) {

  }

  insert(systemUser: SystemUser): Observable<SystemUser> {
    return this.http.post<SystemUser>(this.baseUrl, systemUser)
  }

  update(systemUser: SystemUser): Observable<SystemUser> {
    return this.http.put<SystemUser>(`baseUrl/${systemUser.id}`, systemUser)
  }
  delete(systemUser: SystemUser): Observable<SystemUser> {
    return this.http.delete<SystemUser>(`baseUrl/${systemUser.id}`)
  }

  getAll(): Observable<SystemUser[]> {
    return this.http.get<SystemUser[]>(this.baseUrl)
  }

  getById(id: number): Observable<SystemUser> {
    return this.http.get<SystemUser>(`baseUrl/${id}`)
  }
}
