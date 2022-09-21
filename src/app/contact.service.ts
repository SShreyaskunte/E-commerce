import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
  contact:Contact[]=[
    {
      address: 'New Delhi,BY 10012,India',
      mailId: 'instantbuy@gmail.com',
      phoneNumber: '+08182-279008',
      faxNumber: '+ 01 234 567 89'
    }
  ]

  public getContactDetails():any{
    const contactObservable = new Observable
    (observe =>
      {
        setTimeout
        (()=>
        {
          observe.next(this.contact);
        },500);
      }
    );
      return contactObservable
  }

}
