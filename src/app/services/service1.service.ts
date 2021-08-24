import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ListModel} from "../model/list.model";

@Injectable({
  providedIn: 'root'
})
export class Service1Service {

  // API_URL = 'http://localhost:8080'
  API_URL = 'https://fyrazeamto.herokuapp.com'

  constructor(
    public http: HttpClient
  ) {
  }

  alllista: ListModel[] = []

  addlist(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/addlist`,
      data
    )
  }

  getlists(): Observable<any> {
    return this.http.get(
      `${this.API_URL}/getlist`
    )
  }

  editlist(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/editlist`,
      data
    )
  }

  deletelist(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/deletelist`,
      data
    )
  }

  getsinglelist(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/getsinglelist`,
      data
    )
  }

  addtask(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/add-task`,
      data
    )
  }

  edittask(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/edittask`,
      data
    )
  }

  deletetask(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/deletetask`,
      data
    )
  }

  getsingletask(data: any): Observable<any> {
    return this.http.post(
      `${this.API_URL}/getsingletask`,
      data
    )
  }

}
