import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorpageComponent } from './components/errorpage/errorpage.component';

@NgModule({
  declarations: [
    ErrorpageComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ErrorpageComponent
  ]
})
export class SharedModule { }
