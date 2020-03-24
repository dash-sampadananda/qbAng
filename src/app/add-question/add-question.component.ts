import { Branches } from '../branches';
import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


  constructor() { }

  branch:Branches[];
  brnselected:Number;
  semester:Number[];
  onbrnselected:Boolean;

  ngOnInit(): void {
     this.branch = [
        {id: 1, name: "CSE"},
        {id: 2, name: "EEE"},
        {id: 3, name: "ENTC"},
        {id: 4, name: "CE"},
        {id: 5, name: "ME"}
     ];
     this.semester = [ 1,2,3,4,5,6,7,8 ];

     this.brnselected = 2;

  }

  onBrnSelected(value: any){
         this.onbrnselected= true;
  }

}
