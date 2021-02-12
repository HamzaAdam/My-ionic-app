import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { AnimationController } from "@ionic/angular";

@Component({
  selector: "app-animation",
  templateUrl: "./animation.page.html",
  styleUrls: ["./animation.page.scss"],
})
export class AnimationPage implements OnInit {
  @ViewChild("left") left: ElementRef;
  @ViewChild("left1") left1: ElementRef;
  @ViewChild("left2") left2: ElementRef;
  @ViewChild("left3") left3: ElementRef;
  @ViewChild("right") right: ElementRef;
  @ViewChild("right1") right1: ElementRef;
  @ViewChild("right2") right2: ElementRef;
  @ViewChild("right3") right3: ElementRef;

  constructor(private animationCtrl: AnimationController) {}

  ngOnInit() {}

  animate() {
    const animation1 = this.animationCtrl
      .create()
      .addElement(this.left.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .fromTo("opacity", "1", "0.5")
      .fromTo("transform", "translateY(50vh)", "translateY(-10vh)");

    const animation2 = this.animationCtrl
      .create()
      .addElement(this.right.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .fromTo("opacity", "1", "0.5")
      .fromTo("transform", "translateY(50vh)", "translateY(-10vh)");

    const animation3 = this.animationCtrl
      .create()
      .addElement(this.left1.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(0deg)" },
        { offset: 0.5, transform: "rotate(30deg)" },
        { offset: 1, transform: "rotate(0deg)" },
      ]);
    const animation4 = this.animationCtrl
      .create()
      .addElement(this.left2.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(0deg)" },
        { offset: 0.5, transform: "rotate(-20deg)" },
        { offset: 1, transform: "rotate(10deg)" },
      ]);

    const animation5 = this.animationCtrl
      .create()
      .addElement(this.left3.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(5deg)" },
        { offset: 0.5, transform: "rotate(-10deg)" },
        { offset: 1, transform: "rotate(0deg)" },
      ]);
    const animation6 = this.animationCtrl
      .create()
      .addElement(this.right1.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(-5deg)" },
        { offset: 0.5, transform: "rotate(15deg)" },
        { offset: 1, transform: "rotate(-10deg)" },
      ]);
    const animation7 = this.animationCtrl
      .create()
      .addElement(this.right2.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(-25deg)" },
        { offset: 0.5, transform: "rotate(10deg)" },
        { offset: 1, transform: "rotate(0deg)" },
      ]);
    const animation8 = this.animationCtrl
      .create()
      .addElement(this.right3.nativeElement)
      .iterations(Infinity)
      .duration(4000)
      .afterStyles({ display: "none" })
      .beforeStyles({ display: "content" })
      .keyframes([
        { offset: 0, transform: "rotate(25deg)" },
        { offset: 0.5, transform: "rotate(0deg)" },
        { offset: 1, transform: "rotate(-20deg)" },
      ]);

    // animation1.easing("in-out");
    animation1.play();
    animation2.play();
    animation3.play();
    animation4.play();
    animation5.play();
    animation6.play();
    animation7.play();
    animation8.play();
    // animation1.delay(1000);
  }
}
