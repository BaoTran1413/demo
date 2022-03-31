import { BoundAttribute } from '@angular/compiler/src/render3/r3_ast';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
username='';
usermark='';

user=[
{ id:1,name:'bao', mark:'5',},
{ id:2,name:'thien', mark:'6',},
]
  

  constructor() { }

  ngOnInit(): void {
  }
  submit()
  {
    this.user.push(
      { 
        id: this.user.length + 1,
        name: this.username,
        mark: this.usermark,
      }
    );
      this.username='';
      this.usermark='';
  }
  value='';
  reset(){
    this.username=this.value;
    this.usermark=this.value;
    
  }

}
