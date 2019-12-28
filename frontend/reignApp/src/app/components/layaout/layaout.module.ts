import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayaoutComponent } from './layaout.component';
import { MaterialModule } from '../material/material.module';
import { ShareComponentsModule } from '../share-components/share-components.module';

@NgModule({
  declarations: [LayaoutComponent],
  imports: [
    CommonModule,
    MaterialModule,
    ShareComponentsModule
  ],
  exports: [
    LayaoutComponent
  ]
})
export class LayaoutModule { }
