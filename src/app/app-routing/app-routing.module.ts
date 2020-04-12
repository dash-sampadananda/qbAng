import { AddQuestionComponent } from './../add-question/add-question.component';
import { ViewQuestionComponent } from './../view-question/view-question.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MastersheetComponent } from '../mastersheet/mastersheet.component';

const routes: Routes = [
  {path: 'add-questions', component: AddQuestionComponent},
  {path: 'view-questions', component: ViewQuestionComponent},
  {path: 'mastersheet', component: MastersheetComponent}
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
],
exports: [
    RouterModule
],
declarations: []
})
export class AppRoutingModule { }
export const RoutingComponents = [ AddQuestionComponent, ViewQuestionComponent, MastersheetComponent ];