import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IDictionary, INewData} from "../interfaces";
import {Observable} from "rxjs";
import {urls} from "../constants";

@Injectable({
  providedIn: 'root'
})
export class DicService {
  constructor(private httpClient:HttpClient) {
  }

  create(words:INewData):Observable<INewData> {
    return this.httpClient.post<INewData>(urls.saveData, words)
  }

  getAllData():Observable<IDictionary[]> {
    return this.httpClient.get<IDictionary[]>(urls.getAll)
  }

  getById(id:String):Observable<IDictionary> {
    return this.httpClient.get<IDictionary>(`${urls.getId}/${id}`)
  }

}
