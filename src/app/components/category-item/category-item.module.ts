import { NgModule } from "@angular/core";
import { CategotyItemComponent } from './categoty-item.component';
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";


@NgModule({
    declarations: [CategotyItemComponent],
    imports: [CommonModule, IonicModule],
    exports: [ CategotyItemComponent],
  })
  export class CategoryItemModule {}