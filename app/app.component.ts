import { Http } from '@angular/http';
import {Component, OnInit} from '@angular/core';

declare var emailjs: any;

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',

})
export class AppComponent implements OnInit {
  model: ContactDetails = {name: "", phoneNumber: ""};
  messageList: Error[] = [];
  footerToDisplay: number = 0;

  constructor(private http: Http) {
  };

  ngOnInit() {
    emailjs.init("user_WtRJuW3sWwRrOmfPxG3vJ");
    this.model = new ContactDetails();
  }

  registerDetails(contactModel: ContactDetails){
    this.messageList = [];
    this.messageList = this.validateDetails(contactModel);

    if (this.isValidContactDetails(this.messageList)) {
      this.sendEmail(contactModel);
      this.messageList.push({fieldName:null, message: "הודעה נשלחה למנהלי האתר שייצרו קשר בקרוב"});
      document.getElementById("lastIconContainer").style.marginBottom = "";
      this.footerToDisplay = 1;
    }
    else{
      this.footerToDisplay = 2;
      document.getElementById("lastIconContainer").style.marginBottom = "130px";
    }
    return false;
  }

  sendEmail(contactDetails : ContactDetails){
    emailjs.send('gmail', 'template', {'name': contactDetails.name, 'phone': contactDetails.phoneNumber});
    return false;
  }

  isValidContactDetails(errorsList : Error[]){
    return errorsList.every(x => x.message == null);
  }

  validateDetails(details : ContactDetails) : Error[]{

    this.messageList.push({fieldName: "phoneNumber", message: this.validatePhoneNumber(details.phoneNumber)});
    this.messageList.push({fieldName: "name",        message: this.validateName(details.name)});

    return this.messageList;
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
  message: string;
}
