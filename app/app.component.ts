import { Component, ViewContainerRef, ViewEncapsulation } from '@angular/core';
import { Overlay } from 'angular2-modal';
import { Modal } from 'angular2-modal/plugins/bootstrap';

@Component({
    selector: 'my-app',
    templateUrl: 'app.component.html',

})
export class AppComponent {
  constructor(overlay: Overlay, vcRef: ViewContainerRef, public modal: Modal) {
    overlay.defaultViewContainer = vcRef;
  };

  onClick() {
    this.modal.alert()
      .size('sm')
      .isBlocking(false)
      .showClose(true)
      .keyboard(27)
      .title('Hello World')
      .body('<div class=\"row\"><input placeholder="שם" type="text" style="width:100%" /></div><div class=\"col-xs-4 \"> <input placeholder=\"טלפון\" type=\"tel\" style=\"width:100%\" /></div></div><div class=\"row\"><div class=\"col-xs-2 col-xs-offset-4\"><div class=\"sendIcon\"></div></div></div>')
      .bodyClass('container-fluid contactDetailsModal')
      .open()
  }
}
