"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var angular2_modal_1 = require('../../index');
var modal_1 = require('./modal');
var dialog_form_modal_1 = require('./dialog-form-modal');
exports.providers = [
    { provide: angular2_modal_1.Modal, useClass: modal_1.Modal },
    { provide: modal_1.Modal, useClass: modal_1.Modal }
];
var VexModalModule = (function () {
    function VexModalModule() {
    }
    VexModalModule.getProviders = function () {
        return exports.providers;
    };
    VexModalModule = __decorate([
        core_1.NgModule({
            imports: [angular2_modal_1.ModalModule, common_1.CommonModule],
            declarations: [
                dialog_form_modal_1.VEXDialogButtons,
                dialog_form_modal_1.FormDropIn,
                dialog_form_modal_1.DialogFormModal
            ],
            providers: exports.providers,
            entryComponents: [
                dialog_form_modal_1.DialogFormModal,
                dialog_form_modal_1.FormDropIn
            ]
        }),
        __metadata('design:paramtypes', [])
    ], VexModalModule);
    return VexModalModule;
}());
exports.VexModalModule = VexModalModule;
//# sourceMappingURL=vex.module.js.map
