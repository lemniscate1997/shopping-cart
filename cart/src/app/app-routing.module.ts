import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './shared/components/errorpage/errorpage.component';

const routes: Routes = [
  { path: 'errorpage', component: ErrorpageComponent },
  { path: '', loadChildren: () => import('./features/features.module').then(m => m.FeaturesModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
