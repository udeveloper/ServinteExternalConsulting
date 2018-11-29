import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ServinteFrameworkUiBasicInformationModule} from 'servinte-framework-ui-basic-information';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ServinteFrameworkUiBasicInformationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
