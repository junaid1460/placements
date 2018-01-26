import { NgModule } from '@angular/core';
import { StudentComponent } from './student.component';
import { NewsComponent } from './news/news.component';
import { CompanyComponent } from './company/company.component';
import { studentRoutes } from './student.routes';
import { modules } from '../material.module';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { KeyValPipe } from '../pipes/key.pipe';
@NgModule({
    declarations: [StudentComponent, NewsComponent, CompanyComponent, KeyValPipe],
    imports: [FormsModule, CommonModule, studentRoutes, ...modules],
    bootstrap: [StudentComponent]
})
export class StudentModule { }
