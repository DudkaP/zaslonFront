import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDictionary} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class DicService {
  constructor(private httpClient:HttpClient) {
  }

  create(words:IDictionary):Observable<IDictionary> {
    return this.httpClient.post<IDictionary>(urls.saveData, words)
  }

  getAllData():Observable<IDictionary[]> {
    return this.httpClient.get<IDictionary[]>(urls.getAll)
  }

  getById(id:String):Observable<IDictionary> {
    return this.httpClient.get<IDictionary>(`${urls.getId}/${id}`)
  }

}
