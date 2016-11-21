import { Http } from '@angular/http';
import {Component, OnInit} from '@angular/core';

declare var emailjs: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {
  displayModal:boolean = false;
  model: ContactDetails = {name: "", phoneNumber: ""};
  errorsList: Error[] = [];

  constructor(private http: Http) {
  };

  ngOnInit() {
    emailjs.init("user_WtRJuW3sWwRrOmfPxG3vJ");
    this.model = new ContactDetails();
  }

  closeModal(){
    this.displayModal = false;
  }

  registerDetails(contactModel: ContactDetails){
    this.errorsList = [];
    this.errorsList = this.validateDetails(contactModel);

    if (this.isValidContactDetails(this.errorsList)) {
      this.sendEmail(contactModel);
      this.errorsList.push({fieldName:null, error: "הודעה נשלחה למנהלי האתר שייצרו קשר בקרוב"});
      window.setTimeout(() => { this.closeModal()}, 2000);
    }
    return false;
  }

  openModal(){
    this.displayModal = true;
  }

  sendEmail(contactDetails : ContactDetails){
    emailjs.send('gmail', 'template', {'name': contactDetails .name, 'phone': contactDetails .phoneNumber});
    return false;
  }

  isValidContactDetails(errorsList : Error[]){
    return errorsList.every(x => x.error == null);
  }

  validateDetails(details : ContactDetails) : Error[]{

    this.errorsList.push({fieldName: "phoneNumber", error: (this.validatePhoneNumber(details.phoneNumber))});
    this.errorsList.push({fieldName: "name",        error: this.validateName(details.name)});

    return this.errorsList;
  }

  validatePhoneNumber(phoneNumber : string) : string{
    if (phoneNumber == null)
      return "מספר טלפון לא יכול להיות ריק";
    return this.validateStringAgainstRegex(/^\d{9,10}$/, phoneNumber) ? 'טלפון חייב להכיל רק ספרות באורך 9-10 ספרות' : null;
  }

  validateName(name : string){
    if (name == null)
      return "שם לא יכול להיות ריק";
    return this.validateStringAgainstRegex(/^[a-zA-Zא-ת]{2,10}$/, name) ? 'שם חייב להכיל אותיות באורך 2-10 תווים' : null;
  }

  validateStringAgainstRegex(pattern:RegExp, value : string){
    return !pattern.test(value);
  }
}

export class ContactDetails{
  phoneNumber: string;
  name: string;
}

export class Error{
  fieldName: string;
  error: string;
}
