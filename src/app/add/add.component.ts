import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit() {}

  add(): void {
    this.router.navigate(['/todo'])
  }
}
