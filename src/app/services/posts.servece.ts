import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import Post from '../posts/post';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  apiUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(`${this.apiUrl}/posts`);
  }

}
