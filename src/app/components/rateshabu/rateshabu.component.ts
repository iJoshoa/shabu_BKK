import { Component, OnInit, Query } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable, timer } from "rxjs";

@Component({
  selector: "app-rateshabu",
  templateUrl: "./rateshabu.component.html",
  styleUrls: ["./rateshabu.component.css"]
})
export class RateshabuComponent implements OnInit {
  one = "";
  two = "";
  items: Observable<any[]>;
  constructor(public db: AngularFireDatabase) {
    this.items = db.list("shabushop",ref => ref.orderByChild('s_price')).valueChanges();
  }
  ngOnInit() {}
}
