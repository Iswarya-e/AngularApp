import { Injectable } from '@angular/core';
import { Album } from '../Model/Album';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private http:HttpClient) { }
  getAlbumData():Observable<Album[]>{
    return this.http.get<Album[]>("http://jsonplaceholder.typicode.com/albums");
  }
}
