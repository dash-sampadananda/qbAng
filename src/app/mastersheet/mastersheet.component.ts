import { BranchService } from 'src/app/services/branchService';
import { FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Subjects, Branch } from '../questions-classes';
import { Location } from "@angular/common";

@Component({
  selector: 'app-mastersheet',
  templateUrl: './mastersheet.component.html',
  styleUrls: ['./mastersheet.component.css']
})
export class MastersheetComponent implements OnInit {

  constructor(private location: Location, private branchService: BranchService, private formBuilder: FormBuilder) {
    this.branchForm = this.formBuilder.group({
      name: '',
      full_name: ''
    });
  }


  branches: Branch[];
  branchForm;
  semester: Number[];
  subjects: Subjects[];
  modules: Number[];
  Questions = [];
  activate: Number = 0;
  activateform: Number = 0;
  i: Number = 0;

  ngOnInit(): void {
    this.branchService.getAll()
      .subscribe(
        data => {
          this.branches = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });

    this.semester = [1, 2, 3, 4, 5, 6, 7, 8];

    this.subjects = [
      { sid: 1, subname: "OOPC", fullname: "Object Oriented Programming Concept" },
      { sid: 2, subname: "JP", fullname: "Java Programming" }
    ];

    this.modules = [1, 2, 3, 4];

    this.Questions = [

    ];



  }

  onSubmit(data: any) {
    this.branchService.create(data).subscribe( res => { 
      console.log(res);
      this.branches.push(new Branch(res.id, res.name, res.full_name));
      this.activateform = 0; 
    });
  }

  activatebranchform() {
    this.activateform = 1;
  }
  activatecontent() {
    if (this.activate == 0) {
      this.activate = 1;
    } else {
      this.activate = 0;
    }

  }

}

