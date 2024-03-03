import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListingPageRoutingModule } from './listing-routing.module';

import { ListingPage } from './listing.page';
import { SearchbarModule } from '../components/searchbar/seachbar.modules';
import { CategoryItemModule } from '../components/category-item/category-item.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingPageRoutingModule,
    SearchbarModule,
    CategoryItemModule
  ],
  declarations: [ListingPage]
})
export class ListingPageModule {}
