import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: 'app-allshabu',
  templateUrl: './allshabu.component.html',
  styleUrls: ['./allshabu.component.css']
})
export class AllshabuComponent implements OnInit {
  range = [1, 2, 3];
  star = [1,2,3,4,5];
  items :Observable<any[]>
  constructor(public db : AngularFireDatabase) { 
    this.items = db.list('shabushop').valueChanges();
  }

  ngOnInit() {
  }

}
