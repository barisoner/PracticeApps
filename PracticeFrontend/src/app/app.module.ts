import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';  // <-- HttpClientModule'ü ekleyin

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonCreateComponent } from './person-create/person-create.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }