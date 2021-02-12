import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

import { DetailModalComponent } from "./detail-modal/detail-modal.component";
import { RecipeDetailPickerComponent } from "./picker/recipe-detail-picker/recipe-detail-picker.component";

@NgModule({
  declarations: [RecipeDetailPickerComponent, DetailModalComponent],
  imports: [CommonModule, IonicModule],
  exports: [RecipeDetailPickerComponent, DetailModalComponent],
  entryComponents: [DetailModalComponent],
})
export class SharedModule {}
