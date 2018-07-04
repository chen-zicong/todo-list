import { Component, OnInit, Input } from '@angular/core'
import { NzMessageService, UploadFile } from 'ng-zorro-antd'
import { DataService } from '../service/data.service'
import { Todo } from '../model/todo';
import { imgfile } from '../model/imgfile';
import { log } from 'util';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {
  ngOnInit() { 
   
  }
  @Input() todo: Todo
 
  constructor(private msg: NzMessageService, public dataService: DataService) {
   
    
  }



  beforeUpload = (file: File) => {
    this.getBase64(file, (img: string) => {
          this.todo.img = img
    })
    return true
  }

  private getBase64(img: File, callback: (img: {}) => void): void {
    const reader = new FileReader()
    reader.addEventListener('load', () => callback(reader.result))
    reader.readAsDataURL(img)
  }

}
