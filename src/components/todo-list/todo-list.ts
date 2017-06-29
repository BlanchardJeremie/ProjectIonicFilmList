import { Component } from '@angular/core';

/**
 * Generated class for the TodoListComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'todo-list',
  templateUrl: 'todo-list.html'
})
export class TodoListComponent {

  text: string;

  constructor() {
    console.log('Hello TodoListComponent Component');
    this.text = 'Hello World';
  }

}
