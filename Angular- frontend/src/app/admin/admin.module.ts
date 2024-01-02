import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavComponent } from './nav/nav.component';
import { AdminComponent } from './admin.component';
import { ProductsComponent } from './products/products.component';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductEditComponent } from './product-edit/product-edit.component';



@NgModule({
  declarations: [
    MenuComponent,
    NavComponent,
    AdminComponent,
    ProductsComponent,
    ProductCreateComponent,
    ProductEditComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
