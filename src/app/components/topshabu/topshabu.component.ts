import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: 'app-topshabu',
  templateUrl: './topshabu.component.html',
  styleUrls: ['./topshabu.component.css']
})
export class TopshabuComponent implements OnInit {
  range = [1, 2, 3];
  star = [1,2,3,4,5];
  items :Observable<any[]>
  constructor(public db : AngularFireDatabase) { 
    this.items = db.list('shabushop').valueChanges();
  }


  ngOnInit() {
  }

}
