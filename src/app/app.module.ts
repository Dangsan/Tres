import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoSearchComponent } from './no-search/no-search.component';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NoSearchComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
