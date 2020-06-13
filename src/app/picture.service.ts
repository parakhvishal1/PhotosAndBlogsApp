import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import { Picture } from './models/picture.model';
import { Post } from './models/post.model';



@Injectable({
  providedIn: 'root'
})
export class PictureService {

  private service1Url ='https://jsonplaceholder.typicode.com/albums/1/photos';
  private service2Url ='https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor( private http: HttpClient) { }

  getPicture(): Observable<Picture[]> {
    return this.http.get<Picture[]>(this.service1Url);
  }
  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.service2Url);
  }
}
