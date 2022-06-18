import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRouting } from './home-routing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { CustomerHomeComponent } from './Components/Customer-home/customer-home.component';
import { AdminComponent } from './Components/Admin-home/admin.component';

@NgModule({
  declarations: [
    HomeComponent,
    CustomerHomeComponent,
    AdminComponent
  ],
  imports: [
    HomeRouting,
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule,
    FormsModule
    
  ],
})
export class HomeModule {}
