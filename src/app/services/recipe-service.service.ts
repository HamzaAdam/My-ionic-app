import { Injectable } from "@angular/core";
import { Recipe } from "./../recipes/recipe.model";

@Injectable({
  providedIn: "root",
})
export class RecipeServiceService {
  recipes: Recipe[] = [
    {
      id: "r1",
      title: "Biryani",
      imageURL: "assets/images/biryani.jpg",
      ingredients: ["rice", "masala", "meat"],
    },
    {
      id: "r2",
      title: "Tikka",
      imageURL: "assets/images/bbq.png",
      ingredients: ["beef", "tikkaMasala", "yogurt"],
    },
  ];

  constructor() {}

  getAllRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find((recipe) => {
        return recipe.id == recipeId;
      }),
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter((recipe) => {
      return recipe.id !== recipeId;
    });
  }
}
