import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CategotyItemComponent } from './category-item.component';
import { IonicModule } from "@ionic/angular";

@NgModule({
  declarations: [CategotyItemComponent],
  imports: [CommonModule, IonicModule],
  exports: [CategotyItemComponent],
})
export class CategoryItemModule {}