import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from '../Model/Post';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http:HttpClient) { }
  getPostData():Observable<Post[]>{
     return this.http.get<Post[]>("http://jsonplaceholder.typicode.com/posts");
  }
  getPostDatabyUserId(id)
  {
    return this.http.get("http://jsonplaceholder.typicode.com/posts?userId="+id);
  }
  getPostDatabyId(id)
  {
   return this.http.get("http://jsonplaceholder.typicode.com/posts?id="+id);
  }
}
