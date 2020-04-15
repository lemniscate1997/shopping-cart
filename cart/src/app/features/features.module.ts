import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { TrashComponent } from './components/trash/trash.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDesplayComponent } from './components/item-desplay/item-desplay.component';
import { ProductService } from './services/product.service';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemCreateComponent } from './components/item-create/item-create.component';

// import { UiSwitchModule } from 'ngx-ui-switch';

@NgModule({
  declarations: [
    HomeComponent,
    TrashComponent,
    ItemDesplayComponent,
    ItemDetailsComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    // UiSwitchModule
  ],
  providers: [
    ProductService
  ]
})
export class FeaturesModule { }
