import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';

declare var emailjs: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {
  displayModal:boolean = false;
  model: ContactDetails = null;

  constructor(private http: Http) {
  };

  ngOnInit() {
      this.model = new ContactDetails();
  }

  closeModal(){
    this.displayModal = false;
  }

  registerDetails(contactModel: ContactDetails){
    emailjs.send('gmail', 'template', {'name': contactModel.name, 'phone': contactModel.phoneNumber});
    return false;
  }

  openModal(){
    this.displayModal = true;
  }


}
      // .body('<div class=\'row\'><input placeholder='שם' type='text' style='width:100%' /></div><div class=\'col-xs-4 \'> <input placeholder=\'טלפון\' type=\'tel\' style=\'width:100%\' /></div></div><div class=\'row\'><div class=\'col-xs-2 col-xs-offset-4\'><div class=\'sendIcon\'></div></div></div>')
      //.bodyClass('container-fluid contactDetailsModal')

export class ContactDetails{
  phoneNumber: string;
  name: string;
}
