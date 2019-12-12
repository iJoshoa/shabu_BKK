import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: 'app-allshabu',
  templateUrl: './allshabu.component.html',
  styleUrls: ['./allshabu.component.css']
})
export class AllshabuComponent implements OnInit {
  items :Observable<any[]>
  constructor(public db : AngularFireDatabase) { 
    this.items = db.list('shabushop').valueChanges();
  }

  ngOnInit() {
  }

}
