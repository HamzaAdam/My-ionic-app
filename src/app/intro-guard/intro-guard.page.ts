import { Component, OnInit, ViewChild } from "@angular/core";
import { IonSlides } from "@ionic/angular";

@Component({
  selector: "app-intro-guard",
  templateUrl: "./intro-guard.page.html",
  styleUrls: ["./intro-guard.page.scss"],
})
export class IntroGuardPage implements OnInit {
  @ViewChild("introSlides") slider: IonSlides;

  constructor() {}

  ngOnInit() {}

  next() {
    this.slider.slideNext();
  }
}
