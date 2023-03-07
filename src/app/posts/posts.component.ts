import { Component, OnInit } from '@angular/core';
import { PostsService } from '../services/posts.servece';
import Post from './post';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  posts: Post[] = [];
  first = 0;
  rows = 5;

  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        {
          next: (posts) => {
            this.posts = posts;
            console.log(posts);
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
  }

}

