webpackJsonp([1],{

/***/ 1061:
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
var dialog_1 = __webpack_require__(444);
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, http_1.HttpModule, forms_1.FormsModule, http_1.JsonpModule, dialog_1.DialogModule],
            declarations: [app_component_1.AppComponent],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
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
__webpack_require__(562);
__webpack_require__(561);
__webpack_require__(560);
__webpack_require__(559);
var AppComponent = (function () {
    function AppComponent(http) {
        this.http = http;
        this.displayModal = false;
        this.model = { name: "", phoneNumber: "" };
        this.errorsList = [];
    }
    ;
    AppComponent.prototype.ngOnInit = function () {
        emailjs.init("user_WtRJuW3sWwRrOmfPxG3vJ");
        this.model = new ContactDetails();
    };
    AppComponent.prototype.closeModal = function () {
        this.displayModal = false;
    };
    AppComponent.prototype.registerDetails = function (contactModel) {
        var _this = this;
        this.errorsList = [];
        this.errorsList = this.validateDetails(contactModel);
        if (this.isValidContactDetails(this.errorsList)) {
            this.sendEmail(contactModel);
            this.errorsList.push({ fieldName: null, error: "הודעה נשלחה למנהלי האתר שייצרו קשר בקרוב" });
        }
        window.setTimeout(function () { _this.closeModal(); }, 1500);
        return false;
    };
    AppComponent.prototype.openModal = function () {
        this.displayModal = true;
    };
    AppComponent.prototype.sendEmail = function (contactDetails) {
        emailjs.send('gmail', 'template', { 'name': contactDetails.name, 'phone': contactDetails.phoneNumber });
        return false;
    };
    AppComponent.prototype.isValidContactDetails = function (errorsList) {
        return errorsList.every(function (x) { return x.error == null; });
    };
    AppComponent.prototype.validateDetails = function (details) {
        this.errorsList.push({ fieldName: "phoneNumber", error: (this.validatePhoneNumber(details.phoneNumber)) });
        this.errorsList.push({ fieldName: "name", error: this.validateName(details.name) });
        return this.errorsList;
    };
    AppComponent.prototype.validatePhoneNumber = function (phoneNumber) {
        if (phoneNumber == null)
            return "מספר טלפון לא יכול להיות ריק";
        return this.validateStringAgainstRegex(/^\d{9,10}$/, phoneNumber) ? 'טלפון חייב להכיל רק ספרות באורך 9-10 ספרות' : null;
    };
    AppComponent.prototype.validateName = function (name) {
        if (name == null)
            return "שם לא יכול להיות ריק";
        return this.validateStringAgainstRegex(/^[a-zA-Zא-ת]{2,10}$/, name) ? 'שם חייב להכיל אותיות באורך 2-10 תווים' : null;
    };
    AppComponent.prototype.validateStringAgainstRegex = function (pattern, value) {
        return !pattern.test(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: __webpack_require__(573),
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
exports.AppComponent = AppComponent;
var ContactDetails = (function () {
    function ContactDetails() {
    }
    return ContactDetails;
}());
exports.ContactDetails = ContactDetails;
var Error = (function () {
    function Error() {
    }
    return Error;
}());
exports.Error = Error;


/***/ },

/***/ 559:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 560:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 561:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 562:
/***/ function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ },

/***/ 573:
/***/ function(module, exports) {

module.exports = "<div class=\"container-fluid appContainer\">\n  <div class=\"row logo hidden-sm hidden-xs\"></div>\n  <div class=\"row logoText visible-xs-block visible-sm-block col-xs-6 col-xs-offset-2\" style=\"margin-top:5px\"></div>\n  <div class=\"row logoFrame hidden-xs hidden-sm col-md-12\">\n    <div class=\"col-md-offset-9 col-md-2\">\n      <div class=\"col-md-4\">\n        <div class=\"emailButton logoButtons\"></div>\n      </div>\n      <div class=\"col-md-4\">\n        <div class=\"facebookButton logoButtons\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"col-md-6 col-md-offset-4 hidden-xs hidden-small title\">\n    <span>\n      <h2>\n        <strong>\n             כל פתרונות הענן במקום אחד\n        </strong>\n      </h2>\n    </span>\n  </div>\n  <div class=\"col-xs-11 visible-xs-block\">\n    <span>\n      <h4>\n        <strong>\n             כל פתרונות הענן במקום אחד\n        </strong>\n      </h4>\n    </span>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"row bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          אבטחה\n        </strong>\n        <p>\n          <span class=\"visible-md-block visible-lg-block\">\n            גיבוי המידע מתבצע על שרתים וירטואליים מרוחקים\n          </span>\n          <span class=\"visible-xs-block\">\n            גיבוי המידע מתבצע על שרתים וירטואליים\n          </span>\n          <span>\nוניתן לשחזור בעל עת ומכל מקום\n        </span>\n        </p>\n      </div>\n      <div class=\"col-xs-3 securityIcon visible-xs-block iconMarginTop\"></div>\n      <div class=\"col-md-2 securityIcon visible-md-block visible-lg-block\"></div>\n    </div>\n    <div id=\"firstBodyContainer\" class=\"bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          שירות אישי 24/7\n        </strong>\n        <div>\n          תמיכה כל ימות השנה\n        </div>\n        <div>\n          24 שעות ביממה וללא המתנה\n        </div>\n      </div>\n      <div class=\"visible-xs-block clockIcon col-xs-3\" style=\"margin-top: 18px;\"></div>\n      <div class=\"visible-md-block visible-lg-block clockIcon col-md-2 \"></div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div class=\"row bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          תקשורת מכל מקום\n        </strong>\n        <div>\n          תקשורת פנים ארגונית\n        </div>\n        <div>\n          פשוטה וקלה גם מרחוק\n        </div>\n      </div>\n      <div class=\"col-xs-3 globeButton visible-xs-block\" style=\"margin-top: 10px;\"></div>\n      <div class=\"col-md-2 globeButton visible-md-block visible-lg-block\"></div>\n    </div>\n    <div id=\"thirdBodyContainer\" class=\"bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          חסכון בעלויות כוח אדם\n        </strong>\n        <div class=\"visible-md-block visible-lg-block\">\n          <div>\n            אין כל צורך בהעסקת כוח אדם לתחזוקה\n          </div>\n          <div>\n            וניהול של מערכות המידע והתשתיות בארגון\n          </div>\n        </div>\n        <div class=\"visible-xs-block\">\n          <div>\n            אין צורך בהעסקת כוח אדם לניהול\n          </div>\n          <div>\n            ותחזוקת מערכות המידע והתשתיות בארגון\n          </div>\n        </div>\n      </div>\n      <div class=\"col-xs-3 visible-xs-block piggybankIcon iconMarginTop\"></div>\n      <div class=\"col-md-2 visible-md-block visible-lg-block piggybankIcon\"></div>\n    </div>\n  </div>\n  <div class=\"col-md-12\">\n    <div id=\"lastBodyContainer\" class=\"row bodyContainer col-md-5 col-xs-12\">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          גמישות\n        </strong>\n        <div>\n          שירותי הענן הינם שירותים גימישים וניתנים\n        </div>\n        <div>\n          להרחבה או צמצום של שירוצים לפי צרכי הלקוח\n        </div>\n      </div>\n      <div class=\"col-xs-3 visible-xs-block puzzleIcon iconMarginTop\"></div>\n      <div class=\"col-md-2 puzzleIcon visible-md-block visible-lg-block\"></div>\n    </div>\n    <div class=\"bodyContainer col-md-5 col-xs-12 \">\n      <div class=\"col-md-10 col-xs-9\">\n        <strong>\n          חסכון בעלויות חומרה\n        </strong>\n        <div>\n          אספקת חומרה ייעודית ומחשבים\n        </div>\n        <div>\n          ניידים במחירים הטובים ביותר\n        </div>\n      </div>\n      <div class=\"col-xs-3 visible-xs-block keyboardIcon iconMarginTop\"></div>\n      <div class=\"col-md-2 visible-md-block visible-lg-block keyboardIcon\"></div>\n    </div>\n  </div>\n  <div class=\"row col-md-9 col-md-offset-2 col-xs-12\">\n    <h2 class=\"visible-md-block visible-lg-block\">\n      להצטרפות לחודש ראשון חינם וללא התחייבות חייגו 073-2724073\n    </h2>\n    <h4 class=\"visible-xs-block center col-xs-offset-1\">\n      <strong>\n        להצטרפות לחודש ראשון חינם וללא התחייבות חייגו\n      </strong>\n      <div style=\"font-weight: bold;\">\n        073-2724073\n      </div>\n    </h4>\n  </div>\n  <div class=\"row visible-xs-block visible-sm-block\">\n    <div class=\"col-xs-2 col-xs-offset-3 mobileSendIcon visible-xs-block\" (click)=\"openModal()\">\n    </div>\n    <span style=\"font-size: 16px;\" class=\"col-xs-6 col-xs-pull-1\"> או השאירו פרטים</span>\n  </div>\n  <div class=\"row visible-md-block visible-lg-block\">\n    <div class=\"col-md-1 col-md-offset-2\" style=\"margin-top:-11px\">\n      <div class=\"iconContainer sendIcon\" style=\"margin-left:50px;\" (click)=\"registerDetails(model)\"></div>\n    </div>\n    <div class=\"col-md-7\">\n      <div class=\"col-md-6\" style=\"margin-top: 7px;\">\n        <div class=\"col-md-6\">\n          <input placeholder=\"שם\" style=\"width:100%\" type=\"text\" [(ngModel)]=\"model.name\"/>\n        </div>\n        <div class=\"col-md-6\">\n          <input placeholder=\"טלפון\" style=\"width:100%\" type=\"tel\" [(ngModel)]=\"model.phoneNumber\" />\n        </div>\n      </div>\n      <div class=\"col-md-6 col-md-pull-1 rtl\">\n        <span style=\"font-size: x-large;\">או השאירו פרטים ונחזור אליכם:</span>\n      </div>\n    </div>\n  </div>\n  <div class=\"row col-md-4 col-md-offset-4 visible-md-block visible-lg-block\">\n    <span class=\"subtitle\">...כי ענן זה לא בשמיים - KnowIT</span>\n  </div>\n</div>\n<p-dialog  [responsive]=\"true\" rtl=\"true\" [(visible)] = \"displayModal\"\n          modal=\"modal\" showEffect=\"fade\"\n          (onAfterHide)=\"closeModal()\">\n  <div class=\"row center\" *ngFor=\"let error of errorsList\">\n    <div *ngIf=\"error.fieldName != null\" style=\"color: red\">\n      {{error.error}}\n    </div>\n    <div *ngIf=\"error.fieldName == null\" style=\"color: green\">\n      {{error.error}}\n    </div>\n  </div>\n    <div col=\"row\">\n      <div class=\"col-xs-6\">\n        <input placeholder=\"שם\" class=\"center col-xs-12\" type=\"text\" [(ngModel)]=\"model.name\" />\n      </div>\n      <div class=\"col-xs-6\">\n        <input placeholder=\"טלפון\" class=\"center col-xs-12\" type=\"tel\" [(ngModel)]=\"model.phoneNumber\" />\n      </div>\n    </div>\n  <div class=\"row col-xs-11\">\n    <div class=\"col-xs-2 col-xs-offset-6 mobileSendIcon\" (click)=\"registerDetails(model)\"></div>\n  </div>\n</p-dialog>\n"

/***/ }

},[1061]);
//# sourceMappingURL=main.fce5ff0eb438fa4dc932.bundle.map