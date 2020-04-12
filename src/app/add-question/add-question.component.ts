import { Branch, Subjects, Questions } from '../questions-classes';
import { Component, OnInit } from '@angular/core';
import { Action } from 'rxjs/internal/scheduler/Action';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {


  constructor() { }

  branches:Branch[];
  semester:Number[];
  subjects:Subjects[];
  modules:Number[];
  Questions = [];

  ngOnInit(): void {
     this.branches = [
        {id: 1, name: "CSE", full_name: "Computer Science Engineering"},
        {id: 2, name: "CE", full_name: "Civil Engineering"}
     ];

     this.semester = [ 1,2,3,4,5,6,7,8 ];

     this.subjects = [
        {sid: 1, subname: "OOPC", fullname: "Object Oriented Programming Concept"},
        {sid: 1, subname: "JP", fullname: "Java Programming"}
     ];

     this.modules = [ 1,2,3,4 ];

     this.Questions = [
        
     ];

    }
    onentry(value: Number)
    {
      // this.Questions[].id++;
    }
    showmsg()
    {
       window.alert("The Question is successfully added.");
    }
    reloadpage()
    {
       window.location.reload();
    }
}
