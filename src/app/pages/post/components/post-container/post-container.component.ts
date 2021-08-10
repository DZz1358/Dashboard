import { PostService } from './../../../../shared/services/post.service';
import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/shared/models/post.modal';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-post-container',
  templateUrl: './post-container.component.html',
  styleUrls: ['./post-container.component.scss']
})
export class PostContainerComponent implements OnInit {

  loading$: Observable<boolean>;
  posts$: Observable<Post[]>;

  constructor(private postService: PostService) { 
    this.posts$ = postService.entities$;
    this.loading$ = postService.loading$;

  }

  ngOnInit(): void {
  }


  getPosts() {
    this.postService.getAll();
  }

}
