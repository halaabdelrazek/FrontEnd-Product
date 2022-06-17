import { APP_BASE_HREF } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './modules/auth/auth.module';
import { CoreModule } from './modules/core/core.module';
import { Interceptor } from './modules/core/interceptore/interceptors.service';
import { HomeModule } from './modules/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    FormsModule,
    CoreModule,
    HomeModule

  ],
  providers: [ 
    {provide: APP_BASE_HREF, useValue: '/'},{provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
