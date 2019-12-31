import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// modules
import { MaterialModule } from './components/material/material.module';
import { LayaoutModule } from './components/layaout/layaout.module';
import { ShareComponentsModule } from './components/share-components/share-components.module';

// services
import { ArticlesService } from './services/articles/articles.service';
import { SessionService } from './services/session/session.service';
import { AuthService } from './services/auth/auth.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    LayaoutModule,
    ShareComponentsModule
  ],
  providers: [ArticlesService, SessionService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
