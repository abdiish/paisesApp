import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports:[
    SidebarComponent //Se exporta para poder usarlo en app.component
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
