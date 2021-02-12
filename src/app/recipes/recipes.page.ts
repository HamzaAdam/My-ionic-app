import { Component, OnDestroy, OnInit } from "@angular/core";
import { RecipeServiceService } from "../services/recipe-service.service";
import { Recipe } from "./recipe.model";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.page.html",
  styleUrls: ["./recipes.page.scss"],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];
  constructor(private recipeService: RecipeServiceService) {}

  ngOnInit() {}

  ngOnDestroy() {
    console.log("Ng on destroy");
  }

  ionViewWillEnter() {
    this.recipes = this.recipeService.getAllRecipes();
    console.log("ion view will enter");
  }

  ionViewDidEnter() {
    console.log("ion view did enter");
  }

  ionViewWillLeave() {
    console.log("ion view will leave");
  }

  ionViewDidLeave() {
    console.log("ion view did leave");
  }
}
