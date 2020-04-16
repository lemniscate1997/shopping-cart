import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { TrashComponent } from './components/trash/trash.component';
import { HomeComponent } from './components/home/home.component';
import { ItemDisplayComponent } from './components/item-display/item-display.component';
import { ProductService } from './services/product.service';
import { ItemDetailsComponent } from './components/item-details/item-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ItemCreateComponent } from './components/item-create/item-create.component';

import { InputSwitchModule } from 'primeng/inputswitch';
import { DropdownModule } from 'primeng/dropdown';
import { RadioButtonModule } from 'primeng/radiobutton';


@NgModule({
  declarations: [
    HomeComponent,
    TrashComponent,
    ItemDisplayComponent,
    ItemDetailsComponent,
    ItemCreateComponent
  ],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ReactiveFormsModule,
    InputSwitchModule,
    DropdownModule,
    RadioButtonModule
  ],
  providers: [
    ProductService
  ]
})
export class FeaturesModule { }
