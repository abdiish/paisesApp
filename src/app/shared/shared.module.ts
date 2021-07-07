import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent //Se exporta para poder usarlo en app.component
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedModule { }
