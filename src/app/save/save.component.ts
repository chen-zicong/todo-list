import { Component, OnInit, Input } from '@angular/core'
import { DataService } from '../service/data.service'
import { Todo } from '../model/todo'
import { Router } from '@angular/router'
import { NzMessageService } from 'ng-zorro-antd'

@Component({
  selector: 'app-save',
  templateUrl: './save.component.html',
  styleUrls: ['./save.component.css']
})
export class SaveComponent implements OnInit {
  constructor(
    public dataService: DataService,
    public router: Router,
    private message: NzMessageService
  ) {}
  @Input() todo: Todo

  ngOnInit() {}

  save(): void {
    if ('' == this.todo.title) {
      this.message.info('写点要做的事情呀 哥哥', { nzDuration: 700 })
    } else {
      // this.dataService.save(this.todo)
      this.router.navigate([''])
    }
  }
}
