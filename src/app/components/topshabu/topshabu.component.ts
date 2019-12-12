import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: "app-topshabu",
  templateUrl: "./topshabu.component.html",
  styleUrls: ["./topshabu.component.css"]
})
export class TopshabuComponent implements OnInit {
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list("shabushop").valueChanges();
  }

  ngOnInit() {}
}
