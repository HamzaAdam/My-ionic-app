import { Component, Input, OnInit } from "@angular/core";
import { ModalController } from "@ionic/angular";
import { Recipe } from "src/app/recipes/recipe.model";
import { DetailModalComponent } from "../../detail-modal/detail-modal.component";

@Component({
  selector: "app-recipe-detail-picker",
  templateUrl: "./recipe-detail-picker.component.html",
  styleUrls: ["./recipe-detail-picker.component.scss"],
})
export class RecipeDetailPickerComponent implements OnInit {
  @Input() pickedRecipe: Recipe;
  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {}

  onPickDetails() {
    this.modalCtrl
      .create({
        component: DetailModalComponent,
        componentProps: { pickRecipe: this.pickedRecipe },
      })
      .then((modalEl) => {
        modalEl.present();
      });
  }
}
