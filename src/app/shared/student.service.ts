import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


import { Student } from './student.model';

@Injectable()
export class StudentService {
  selectedStudent: Student;
  students: Student[];
  readonly baseURL = 'http://localhost:3000/students';

  constructor(private http: HttpClient) { }

  postStudent(stud: Student) {
    return this.http.post(this.baseURL, stud);
  }

  getStudentList() {
    return this.http.get(this.baseURL);
  }

  putStudent(stud: Student) {
    return this.http.put(this.baseURL + `/${stud._id}`, stud);
  }

  deleteStudent(_id: string) {
    return this.http.delete(this.baseURL + `/${_id}`);
  }

}
