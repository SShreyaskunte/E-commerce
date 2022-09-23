import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public adminSubject = new Subject<boolean>();

  validateAdmin(data:boolean)
  {
    this.adminSubject.next(data);
  }

  hostURL = environment.adminapi;

  value?:boolean;
  getAdminStatus(){
    this.adminSubject.subscribe(
      data =>
      {
        this.value = data;
      }
    );
    return this.value;
  }

  constructor() { }
}
