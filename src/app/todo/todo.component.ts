import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { DataService } from '../service/data.service'
import { Todo } from '../model/todo'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todoId: number
  todo: Todo
  taskValue: string = ''
  constructor(
    public route: ActivatedRoute,
    public dataService: DataService,
    public router: Router,
    public message: NzMessageService
  ) {}

  back(): void {
    if ('' == this.todo.title) {
      this.message.info('写点要做的事情呀 哥哥', { nzDuration: 700 })
    } else {
      // this.dataService.save(this.todo)
      this.router.navigate([''])
    }
  }

  addTaskItem(): void {
    this.todo.item.push(this.taskValue)
    this.taskValue = ''
  }

  onChange(result: Date): void {
    this.todo.date = result
  }

  ngOnInit() {
    this.todoId = this.route.snapshot.params['id']
    if (this.todoId != null) {
      this.todo = this.dataService.getTodoById(this.todoId)
    } else {
      if (this.dataService.getTodos().length != 0) {
        this.todo = {
          
          id:this.dataService.getTodos()[this.dataService.getTodos().length - 1].id + 1,
          title: '',
          content: '',
          date: new Date(),
          item: [],
          isCheck: false,
          status: 0,
          img: ''
        }
      } else {
        this.todo = {
          id: 1,
          title: '',
          content: '',
          date: new Date(),
          item: [],
          isCheck: false,
          status: 0,
          img: ''
        }
      }
      this.dataService.getTodos().push(this.todo)
    }
  }
}
