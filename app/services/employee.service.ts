import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private afs: AngularFirestore) { }

   addEmployee(employee: any): Promise<any> {
    return this.afs.collection('employees').add(employee);
  }

  getEmployees(): any {
    return this.afs.collection('employees').valueChanges();
  }

  updateEmployee(id: string, employee: any): Promise<any> {
    return this.afs.collection('employees').doc(id).update(employee);
  }

  deleteEmployee(id: string): Promise<any> {
    return this.afs.collection('employees').doc(id).delete();
  }


}