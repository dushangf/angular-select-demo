import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularSelectModule } from '@dushangf/angular-select';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, AngularSelectModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
