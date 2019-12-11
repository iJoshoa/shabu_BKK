import { Component, OnInit } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { Observable } from "rxjs";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"]
})
export class ContactComponent implements OnInit {
  nameValue = null;
  emailValue = null;
  textValue = null;
  alert = "";

  contact: Observable<any[]>;

  constructor(public db: AngularFireDatabase) {
    this.contact = db.list("contact").valueChanges();
  }
  onSubmit() {
    if (
      this.emailValue == null ||
      this.nameValue == null ||
      this.textValue == null
    ) {
      console.log("no value");
      var element = document.getElementById("show");
      element.classList.add("alert-danger");
      this.alert = "เพิ่มข้อมูลไม่สำเร็จ กรุณากรอกข้อมูลให้ครบ";
    } else {
      this.db.list("contact").push({
        name: this.nameValue,
        email: this.emailValue,
        comment: this.textValue
      });
      var element = document.getElementById("show");
      element.classList.add("alert-success");
      this.alert = "เพิ่มข้อมูลสำเร็จ";
      this.nameValue = null;
      this.emailValue = null;
      this.textValue = null;
    }

    document.getElementById("show").style.display = "block";
  }

  ngOnInit() {}
}
