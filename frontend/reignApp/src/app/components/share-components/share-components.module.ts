import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainContainerComponent } from './main-container/main-container.component';
import { FooterComponent } from './footer/footer.component';

// modules
import { MaterialModule } from '../material/material.module';
import { ArticlesModule } from '../articles/articles.module';

@NgModule({
  declarations: [
    HeaderComponent,
    MainContainerComponent,
    FooterComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ArticlesModule
  ],
  exports: [
    HeaderComponent,
    MainContainerComponent,
    FooterComponent
  ]
})
export class ShareComponentsModule { }
