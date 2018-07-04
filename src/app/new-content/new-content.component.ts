import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-content',
  templateUrl: './new-content.component.html',
  styleUrls: ['./new-content.component.css']
})
export class NewContentComponent implements OnInit {
  date = null; // new Date();
  constructor() { }

  ngOnInit() {
  }
  onChange(result: Date): void {
    console.log('onChange: ', result);
  }


}
