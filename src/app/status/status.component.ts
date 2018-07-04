import { Component, OnInit, Input } from '@angular/core'
import { DataService } from '../service/data.service'
import { Todo } from '../model/todo'

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {
  constructor(public dataservice: DataService) {}
  @Input() todo: Todo
  ngOnInit() {}
  setStatus(status: number) {
    this.todo.status =status
  }
}
