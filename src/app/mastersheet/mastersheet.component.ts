import { Component, OnInit } from '@angular/core';
import { Subjects, Branches } from '../questions-classes';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mastersheet',
  templateUrl: './mastersheet.component.html',
  styleUrls: ['./mastersheet.component.css']
})
export class MastersheetComponent implements OnInit {

  constructor(private location: Location) { }


  branches:Branches[];
  semester:Number[];
  subjects:Subjects[];
  modules:Number[];
  Questions = [];
  activate:Number = 0;
  activateform:Number = 0;
  i:Number = 0;

  ngOnInit(): void {
     this.branches = [
       { bid: 1, name: 'CSE', fullname: 'Computer Science Engineering' }
     ];

     this.semester = [ 1,2,3,4,5,6,7,8 ];

     this.subjects = [
        {sid: 1, subname: "OOPC", fullname: "Object Oriented Programming Concept"},
        {sid: 2, subname: "JP", fullname: "Java Programming"}
     ];

     this.modules = [ 1,2,3,4 ];

     this.Questions = [
        
     ];

    }

    goBack()
    {
      window.alert("Branch added successfully !!")
      this.activateform = 0;
    }

    activatebranchform(){
      this.activateform = 1;
    }
    activatecontent(){
      if (this.activate==0) {
        this.activate = 1;  
      } else {
        this.activate = 0;
      }
 
    }

}

