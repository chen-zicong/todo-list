import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd';

const fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.less']
})
export class MainComponent implements OnInit {
  loading = true; // bug
  loadingMore = false;
  showLoadingMore = true;
  data = [];

  constructor(private http: HttpClient, private msg: NzMessageService) {}

  ngOnInit(): void {
    
  }

  

}
