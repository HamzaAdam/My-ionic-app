import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Animation, AnimationController } from "@ionic/angular";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.page.html",
  styleUrls: ["./signup.page.scss"],
})
export class SignupPage implements OnInit {
  @ViewChild("detailForm") detailForm: ElementRef;
  @ViewChild("gamesList") gamesList: ElementRef;
  @ViewChild("platformDiv") platformDiv: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  async moveForward(current: ElementRef, next: ElementRef) {
    const animation1: Animation = this.animationCtrl
      .create()
      .addElement(current.nativeElement)
      .iterations(1)
      .duration(200)
      .fromTo("transform", "translateX(0vw)", "translateX(-100vw)")
      .afterStyles({ display: "none" });

    const animation2: Animation = this.animationCtrl
      .create()
      .addElement(next.nativeElement)
      .duration(200)
      .iterations(1)
      .fromTo("transform", "translateX(0vw)", "translateX(100)")
      .beforeStyles({ display: "contents" });

    await animation1.play();
    await animation2.play();
  }

  async moveBackward(current: ElementRef, back: ElementRef) {
    const animation1 = this.animationCtrl
      .create()
      .addElement(current.nativeElement)
      .iterations(1)
      .duration(200)
      .afterStyles({ display: "none" })
      .fromTo("opacity", "1", "0.2");

    const animation2 = this.animationCtrl
      .create()
      .addElement(back.nativeElement)
      .duration(200)
      .iterations(1)
      .beforeStyles({ display: "contents" })
      .fromTo("opacity", "0.2", "1");

    await animation1.play();
    await animation2.play();
  }

  detailNext() {
    this.moveForward(this.detailForm, this.gamesList);
  }

  main2Back() {
    this.moveBackward(this.gamesList, this.detailForm);
  }

  main2Skip() {
    this.moveForward(this.gamesList, this.platformDiv);
  }

  main3back() {
    this.moveBackward(this.platformDiv, this.gamesList);
  }
}
