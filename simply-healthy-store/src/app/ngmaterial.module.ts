import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
  ],
  exports: [
    MatButtonModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatIconModule,
    MatListModule,
    MatBadgeModule,
    MatTableModule,
  ],
})
export class NgmaterialModule { }
