import { Component, OnInit } from '@angular/core'
import { DataService } from '../service/data.service'
import { Todo } from '../model/todo'
import { Router } from '@angular/router'
import {  NzMessageService } from 'ng-zorro-antd'
import { Observable } from 'rxjs';


const fakeDataUrl =
  'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {
  data: Todo[] = []
  selectTodo: Todo
  selectId: number
  color: string [] =["","#f33f3f","#c9f049","#47e07a"]
  ngOnInit(): void {
    this.data = this.dataService.getTodos()
  
  }

  onSelect(todo: Todo): void {
    this.selectTodo = todo
    this.router.navigate(['/todo', `${this.selectTodo.id}`])
  }

  constructor(
    public dataService: DataService,
    public router: Router,
    private message: NzMessageService
  ) {}

  createBasicMessage(id: number): void {
    if (!this.dataService.getTodoById(id).isCheck) {
      this.message.success('完成啦！！！',{nzDuration	:700})
      this.dataService.getTodoById(id).isCheck = true
    } else {
      this.message.info('等等,好像差点什么...',{nzDuration	:700})
      this.dataService.getTodoById(id).isCheck = false
    }
  }

  deleteMessage(id: number): void {
    this.message.error('消灭掉...',{nzDuration	:700})
    this.dataService.deleteById(id)
  }
}
