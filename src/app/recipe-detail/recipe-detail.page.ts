import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { RecipeServiceService } from "../recipe-service.service";
import { Recipe } from "../recipes/recipe.model";

@Component({
  selector: "app-recipe-detail",
  templateUrl: "./recipe-detail.page.html",
  styleUrls: ["./recipe-detail.page.scss"],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  loadRecipe: Recipe;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeServiceService,
    private router: Router,
    private alertController: AlertController
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((param) => {
      if (param.has("recipeId")) {
        const recipeId = param.get("recipeId");
        this.loadRecipe = this.recipeService.getRecipe(recipeId);
      } else return;
    });
  }

  onDeleteRecipe() {
    this.alertController
      .create({
        header: "Alert",
        message: "Are you sure?",
        buttons: [
          {
            text: "Okay",
            handler: () => {
              this.recipeService.deleteRecipe(this.loadRecipe.id);
              this.router.navigate(["/recipes"]);
            },
          },
          {
            text: "Cancel",
            role: "cancel",
          },
        ],
      })
      .then((alert) => {
        alert.present();
      });
  }

  ngOnDestroy() {
    console.log("recipe-detail on Destroy");
  }
}
