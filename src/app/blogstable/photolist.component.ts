import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';
import { Picture } from '../models/picture.model';
import { Observable, Subscription } from 'rxjs'
import { DataSource } from '@angular/cdk/collections';

@Component({
  selector: 'app-photolist',
  templateUrl: './photolist.component.html',
  styleUrls: ['./photolist.component.css']
})
export class PhotolistComponent implements OnInit {
  dataSource = [];

  constructor(private pictureService: PictureService) {
    console.log(this.dataSource);
    this.pictureService.getPicture().subscribe((response) => {
      this.dataSource = response;
    });
  }
  ngOnInit(): void {
  }
}


