import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroceryComponent } from './grocery/grocery.component';

const routes: Routes = [
  { path: '',  redirectTo: '/grocery', pathMatch: 'full' },
  { path: 'grocery', pathMatch: 'full', component: GroceryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
