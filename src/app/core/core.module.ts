import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';

const DECLARATIONS = [NavbarComponent]

@NgModule({
  declarations: DECLARATIONS,
  imports: [
    CommonModule
  ],
  exports: DECLARATIONS
})
export class CoreModule { }
