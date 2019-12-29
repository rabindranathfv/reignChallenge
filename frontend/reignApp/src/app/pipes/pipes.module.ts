import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardSearchPipe } from './card-search/card-search.pipe';
import { SpecialDatePipe } from './special-date/special-date.pipe';

@NgModule({
  declarations: [CardSearchPipe, SpecialDatePipe],
  imports: [
    CommonModule
  ],
  exports: [CardSearchPipe, SpecialDatePipe]
})
export class PipesModule { }
