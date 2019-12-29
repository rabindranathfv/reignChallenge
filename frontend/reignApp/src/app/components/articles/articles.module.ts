import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesComponent } from './articles/articles.component';
import { ArticleItemComponent } from './article-item/article-item.component';
import { ArticleNoDataComponent } from './article-no-data/article-no-data.component';

// modules
import { MaterialModule } from '../material/material.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [
    ArticlesComponent,
    ArticleItemComponent,
    ArticleNoDataComponent],
  imports: [
    CommonModule,
    MaterialModule,
    PipesModule
  ],
  exports: [
    ArticlesComponent,
    ArticleItemComponent,
    ArticleNoDataComponent
  ]
})
export class ArticlesModule { }
