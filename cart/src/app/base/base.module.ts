import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BaseService } from './services/base.service';
import { HeaderBaseComponent } from './components/header-base/header-base.component';
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { customDateTime } from './custom-date-time';

@NgModule({
  declarations: [
    HeaderBaseComponent,
    SideNavBarComponent,
    customDateTime
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderBaseComponent,
    SideNavBarComponent,
    customDateTime
  ],
  providers: [BaseService],
  bootstrap: []
})

export class BaseModule { }
