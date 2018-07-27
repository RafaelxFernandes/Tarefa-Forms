import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(login){
  	console.log(login.value);
  	console.log(login.status);
  }
}