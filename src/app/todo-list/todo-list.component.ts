import { Component, OnInit } from '@angular/core';
import { Todo } from '../todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  todos: Todo[] = [
    { id: 1, title: 'Title 1', body: 'Body 1', done: false },
    { id: 2, title: 'Title 2', body: 'Body 2', done: true }
  ]
  constructor() {
  }

  doneTodos: Todo[] = this.todos.filter(todo => todo.done)

  checkValue(value: boolean) {
    this.updateFiltered()
  }

  showTodo(id: number) {
    console.log(id)
  }

  deleteTodo(id: number) {
    console.log(id)
  }

  updateFiltered() {
    this.doneTodos = this.todos.filter(todo => todo.done)
  }


  ngOnInit(): void {
  }

}
