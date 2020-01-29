import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import * as Material from '@angular/material';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatExpansionModule,
    Material.MatMenuModule
  ],
  exports : [
    Material.MatButtonModule,
    Material.MatTableModule,
    Material.MatIconModule,
    Material.MatDialogModule,
    Material.MatToolbarModule,
    Material.MatExpansionModule,
    Material.MatMenuModule
    ]
})
export class MaterialModule { }
