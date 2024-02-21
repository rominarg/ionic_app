import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
    // Ajusta la ruta y la importación según tu estructura de carpetas y módulos
  },
  {
    path: 'customers',
    loadChildren: () => import('../customers/customers.module').then(m => m.CustomersPageModule)
    // Ajusta la ruta y la importación según tu estructura de carpetas y módulos
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
