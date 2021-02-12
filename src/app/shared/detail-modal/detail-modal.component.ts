import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Recipe } from "src/app/recipes/recipe.model";

@Component({
  selector: "app-detail-modal",
  templateUrl: "./detail-modal.component.html",
  styleUrls: ["./detail-modal.component.scss"],
})
export class DetailModalComponent implements OnInit {
  @Input() pickRecipe: Recipe;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onCancel() {
    this.modalCtrl.dismiss();
  }
}
