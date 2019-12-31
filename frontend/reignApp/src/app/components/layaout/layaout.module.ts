import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayaoutComponent } from './layaout.component';

// modules
import { MaterialModule } from '../material/material.module';
import { ShareComponentsModule } from '../share-components/share-components.module';
import { PipesModule } from 'src/app/pipes/pipes.module';

@NgModule({
  declarations: [LayaoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShareComponentsModule,
    PipesModule
  ],
  exports: [
    LayaoutComponent
  ]
})
export class LayaoutModule { }
