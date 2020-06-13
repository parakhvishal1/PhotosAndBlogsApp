import { Component, OnInit, AfterViewInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { Observable, Subscription } from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-blogstable',
  templateUrl: './blogstable.component.html',
  styleUrls: ['./blogstable.component.css']
})
export class BlogstableComponent implements OnInit, AfterViewInit {
  dataSource = new PostDataSource (this.pictureService);
  displayedColumns = ['postId', 'id', 'name', 'email', 'body'];

  constructor( private pictureService: PictureService ) {

   }

  ngOnInit(): void {
  }
  ngAfterViewInit() {
console.log(this.dataSource);
  }

}
export class PostDataSource extends DataSource<any> {
  constructor(private pictureService: PictureService) {
    super();
  }
  connect(): Observable<Post[]> {
    return this.pictureService.getPost();
  }
  disconnect() {};
}
