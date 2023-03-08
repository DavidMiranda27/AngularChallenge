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

  display: boolean = false;
  body: string = '';
  title: string = '';

  postsFiltered: Post[] = [];
  postsBackup: Post[] = [];

  displayModal: boolean = false;

  constructor(private service: PostsService) {}

  ngOnInit(): void {
    this.service.getPosts()
      .subscribe(
        {
          next: (posts) => {
            this.posts = posts;
            this.postsBackup = posts;
          },
          error: (err) => {
            console.log(err);
          }
        }
      );
  }

  showDialog(body: string, title: string) {
    this.body = body;
    this.title = title;
    this.display = true;
  }

  findPostsByTitleBody(value: string) {

    if (value === '') {
      this.posts = this.postsBackup;
      return;
    }

    this.postsFiltered = this.posts.filter((post) => {
      return post.title.includes(value) || post.body.includes(value)}
    );

    if (this.postsFiltered.length > 0) {
      this.posts = this.postsFiltered;
    }else {
      this.displayModal = true;
    }
  }

}


