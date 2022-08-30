import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Comment } from '@angular/compiler';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:HttpClient) { }
  getCommentsData():Observable<Comment[]>{
    return this.http.get<Comment[]>("http://jsonplaceholder.typicode.com/comments");
  }
}
