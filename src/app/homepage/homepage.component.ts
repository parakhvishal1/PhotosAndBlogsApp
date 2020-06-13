import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';




@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor( private pictureservice : PictureService ) { }

  opened= false;
  ngOnInit(): void {
  }

}
