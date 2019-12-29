import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { NavbarComponent } from './navbar/navbar.component';

// modules
import { MaterialModule } from '../material/material.module';
import { ArticlesModule } from '../articles/articles.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    NavbarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ArticlesModule
  ],
  exports: [
    HeaderComponent,
    NavbarComponent,
    MainContainerComponent
  ]
})
export class ShareComponentsModule { }
