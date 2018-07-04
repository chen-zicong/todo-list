import { Injectable } from '@angular/core'
import { TODOS } from '../model/todos'
import { Todo } from '../model/todo'

import { Observable, of } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor() {}
  /**
   * 获取全部的todo
   */
  getTodos(): Todo[] {
    return TODOS
  }
  // getTodos(): Observable<Todo[]> {
    
  //   return of(TODOS)

  // }

  /**
   * @param selectId 通过ID查询todo对象
   */
  getTodoById(selectId: number): Todo {
    for (let todo of TODOS) {
      if (todo.id == selectId) {
        return todo
      } else {
        continue
      }
    }
  }

  deleteById(id: number): void {
    TODOS.splice(TODOS.findIndex(item => item.id == id), 1)
    console.log(TODOS)
  }

  update(todo: Todo): void {
    TODOS.findIndex(item => item.id == todo.id)
  }

  save(todo: Todo): void {
    TODOS.push(todo)
  }
}
