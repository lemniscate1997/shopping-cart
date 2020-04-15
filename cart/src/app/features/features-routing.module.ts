import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TrashComponent } from './components/trash/trash.component';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ItemCreateComponent } from './components/item-create/item-create.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'trash', component: TrashComponent },
  { path: 'product/:id', component: ItemDetailsComponent },
  { path: 'create', component: ItemCreateComponent },
  { path: 'update/:id', component: ItemCreateComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
