import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// modules
import { MaterialModule } from './components/material/material.module';
import { LayaoutModule } from './components/layaout/layaout.module';
import { ShareComponentsModule } from './components/share-components/share-components.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayaoutModule,
    ShareComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
