import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  nameValue = "";
  emailValue = "";
  textValue = "";
  contact: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.contact = db.list("contact").valueChanges();
  }
  onSubmit() {
    this.db
      .list("contact")
      .push({
        name: this.nameValue,
        email: this.emailValue,
        comment: this.textValue
      });
    this.nameValue = "";
    this.emailValue = "";
    this.textValue = "";
  }

  ngOnInit() {}
}
