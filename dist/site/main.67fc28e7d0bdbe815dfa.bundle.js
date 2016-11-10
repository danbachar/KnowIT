webpackJsonp([1],{

/***/ 1040:
/***/ function(module, exports, __webpack_require__) {


        var result = __webpack_require__(378);

        if (typeof result === "string") {
            module.exports = result;
        } else {
            module.exports = result.toString();
        }
    

/***/ },

/***/ 1058:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var platform_browser_dynamic_1 = __webpack_require__(182);
var app_module_1 = __webpack_require__(448);
var core_1 = __webpack_require__(0);
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);


/***/ },

/***/ 448:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var core_1 = __webpack_require__(0);
var platform_browser_1 = __webpack_require__(103);
var app_component_1 = __webpack_require__(556);
var forms_1 = __webpack_require__(19);
var http_1 = __webpack_require__(181);
__webpack_require__(1040);
var dialog_1 = __webpack_require__(444);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, http_1.JsonpModule, dialog_1.DialogModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ },

/***/ 556:
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var http_1 = __webpack_require__(181);
var core_1 = __webpack_require__(0);
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.displayModal = false;
        this.model = null;
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        this.model = new ContactDetails();
    };
    AppComponent.prototype.closeModal = function () {
        this.displayModal = false;
    };
    AppComponent.prototype.registerDetails = function (contactModel) {
        emailjs.send('gmail', 'template', { 'name': contactModel.name, 'phone': contactModel.phoneNumber });
        return false;
    };
    AppComponent.prototype.openModal = function () {
        this.displayModal = true;
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(569),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
// .body('<div class=\'row\'><input placeholder='שם' type='text' style='width:100%' /></div><div class=\'col-xs-4 \'> <input placeholder=\'טלפון\' type=\'tel\' style=\'width:100%\' /></div></div><div class=\'row\'><div class=\'col-xs-2 col-xs-offset-4\'><div class=\'sendIcon\'></div></div></div>')
//.bodyClass('container-fluid contactDetailsModal')
var ContactDetails = (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());
exports.ContactDetails = ContactDetails;


/***/ },

/***/ 569:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid col-md-12 col-xs-12\">\n  <div class=\"row logo hidden-sm hidden-xs\"></div>\n  <div class=\"row logoText col-xs-6 col-xs-offset-4\"></div>\n  <div class=\"row logoFrame hidden-xs hidden-sm col-md-12\">\n    <div class=\"col-md-offset-9 col-md-2\">\n      <div class=\"col-md-4\">\n        <div class=\"emailButton logoButtons\"></div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"facebookButton logoButtons\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-md-offset-4 hidden-xs hidden-small title\">\n    <span>\n      <h2>\n        <strong>\n             כל פתרונות הענן במקום אחד\n        </strong>\n      </h2>\n    </span>\n  </div>\n  <div class=\"col-xs-10 visible-xs-block\">\n    <span>\n      <h4>\n        <strong>\n             כל פתרונות הענן במקום אחד\n        </strong>\n      </h4>\n    </span>\n  </div>\n  <div class=\"row col-md-11 col-md-offset-1 col-xs-12\">\n    <div class=\"bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          אבטחה\n        </strong>\n        <p>\n          <span class=\"visible-md-block visible-lg-block\">\n            גיבוי המידע מתבצע על שרתים וירטואליים מרוחקים\n          </span>\n          <span class=\"visible-xs-block\">\n            גיבוי המידע מתבצע על שרתים וירטואליים\n          </span>\n          <span>\nוניתן לשחזור בעל עת ומכל מקום\n        </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"securityIcon visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 securityIcon visible-md-block visible-lg-block\"></div>\n    </div>\n    <div class=\"bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          שירות אישי 24/7\n        </strong>\n        <p>\n          <span>\n            תמיכה כל ימות השנה\n          </span>\n          <span>\n          24 שעות ביממה וללא המתנה\n          </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"clockIcon visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 visible-md-block visible-lg-block clockIcon\"></div>\n    </div>\n  </div>\n  <div class=\"row col-md-11 col-md-offset-1 col-xs-offset-1 col-xs-11\">\n    <div class=\"bodyContainer col-md-5\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          תקשורת מכל מקום\n        </strong>\n        <p>\n          <span>\n            תקשורת פנים ארגונית\n          </span>\n          <span>\n          פשוטה וקלה גם מרחוק\n          </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"globeButton visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 globeButton visible-md-block visible-lg-block\"></div>\n    </div>\n    <div class=\"bodyContainer col-md-5\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          חסכון בעלויות כוח אדם\n        </strong>\n        <p class=\"visible-md-block visible-lg-block\">\n          <span>\nאין כל צורך בהעסקת כוח אדם לתחזוקה\n          </span>\n          <span>\n            וניהול של מערכות המידע והתשתיות בארגון\n          </span>\n        </p>\n        <p class=\"visible-xs-block\">\n          <span>\nאין צורך בהעסקת כוח אדם לניהול\n          </span>\n          <span>\n            ותחזוקת מערכות המידע והתשתיות בארגון\n          </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"piggybankIcon visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 visible-md-block visible-lg-block piggybankIcon\"></div>\n    </div>\n  </div>\n  <div class=\"row col-md-11 col-md-offset-1 col-xs-offset-1 col-xs-11\">\n    <div class=\"bodyContainer col-md-5\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          גמישות\n        </strong>\n        <p>\n          <span>\n            שירותי הענן הינם שירותים גימישים וניתנים\n          </span>\n          <span>\n          להרחבה או צמצום של שירוצים לפי צרכי הלקוח\n          </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"puzzleIcon visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 puzzleIcon visible-md-block visible-lg-block\"></div>\n    </div>\n    <div class=\"bodyContainer col-md-5\">\n      <div class=\"col-md-10 col-xs-10\">\n        <strong>\n          חסכון בעלויות חומרה\n        </strong>\n        <p>\n          <span>\nאספקת חומרה ייעודית ומחשבים\n          </span>\n          <span>\n            ניידים במחירים הטובים ביותר\n          </span>\n        </p>\n      </div>\n      <div class=\"visible-xs-block iconContainer\">\n        <div class=\"keyboardIcon visible-xs-block\"></div>\n      </div>\n      <div class=\"col-md-2 visible-md-block visible-lg-block keyboardIcon\"></div>\n    </div>\n  </div>\n  <div class=\"row col-md-9 col-md-offset-2 col-xs-12\">\n    <h2 class=\"visible-md-block visible-lg-block\">\n      להצטרפות לחודש ראשון חינם וללא התחייבות חייגו 073-2724073\n    </h2>\n    <h4 class=\"visible-xs-block center col-xs-offset-1\">\n      <strong>\n        להצטרפות לחודש ראשון חינם וללא התחייבות חייגו 073-2724073\n      </strong>\n    </h4>\n  </div>\n  <div class=\"marginTop col-xs-12\">\n    <div class=\"col-xs-7 col-xs-offset-5 visible-xs-block\">\n      <span style=\"font-size: 16px;\"> או השאירו פרטים</span>\n    </div>\n    <div class=\"col-xs-2 col-xs-offset-5 visible-xs-block\">\n      <div class=\"sendIcon subtitleIcon\" (click)=\"openModal()\"></div>\n    </div>\n    <p-dialog rtl=\"true\" [(visible)] = \"displayModal\"\n              modal=\"modal\" showEffect=\"fade\" *ngIf=\"displayModal\"\n              (onAfterHide)=\"closeModal()\" class=\"col-md-6 col-xs-12\">\n      <h1>gever</h1>\n    </p-dialog>\n  </div>\n  <div class=\"row\">\n    <div class=\"col-md-1 col-md-offset-2 visible-md-block visible-lg-block\">\n      <div class=\"iconContainer sendIcon\" (click)=\"openModal()\"></div>\n    </div>\n    <div class=\"col-md-3\" style=\"margin-top: 5px;\">\n      <div class=\"col-md-6\">\n        <input placeholder=\"שם\" style=\"width:100%\" type=\"text\">\n      </div>\n      <div class=\"col-md-6\">\n        <input placeholder=\"טלפון\" style=\"width:100%\" type=\"tel\">\n      </div>\n    </div>\n    <div class=\"col-md-4 rtl\">\n      <span style=\"font-size: x-large;\">או השאירו פרטים ונחזור אליכם:</span>\n    </div>\n  </div>\n  <div class=\"row col-md-4 col-md-offset-4 visible-md-block visible-lg-block\">\n    <span class=\"subtitle\">...כי ענן זה לא בשמיים - KnowIT</span>\n  </div>\n</div>\n"

/***/ }

},[1058]);
//# sourceMappingURL=main.67fc28e7d0bdbe815dfa.bundle.map