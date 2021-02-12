import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { IonicModule } from "@ionic/angular";

import { RecipesPageRoutingModule } from "./recipes-routing.module";
import { RecipesPage } from "./recipes.page";
import { RecipeItemComponent } from "./recipe-item/recipe-item.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecipesPageRoutingModule,
    SharedModule,
  ],
  declarations: [RecipesPage, RecipeItemComponent],
})
export class RecipesPageModule {}
