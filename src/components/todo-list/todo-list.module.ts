import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { TodoListComponent } from './todo-list';

@NgModule({
  declarations: [
    TodoListComponent,
  ],
  imports: [
    IonicModule,
  ],
  exports: [
    TodoListComponent
  ]
})
export class TodoListComponentModule {}
