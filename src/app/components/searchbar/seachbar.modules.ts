import { NgModule } from "@angular/core";
import { SearchbarComponent } from "./searchbar.component";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";

@NgModule({
    declarations: [SearchbarComponent],
    imports: [ CommonModule,IonicModule],
    exports: [SearchbarComponent ],
})
  export class SearchbarModule{}