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
var platform_browser_1 = require('@angular/platform-browser');
var index_1 = require('./providers/index');
var tokens_1 = require('./models/tokens');
var index_2 = require('./components/index');
var index_3 = require('./overlay/index');
var ModalModule = (function () {
    function ModalModule() {
    }
    /**
     * Returns a ModalModule pre-loaded with a list of dynamically inserted components.
     * Since dynamic components are not analysed by the angular compiler they must register manually
     * using entryComponents, this is an easy way to do it.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns {{ngModule: ModalModule, providers: {provide: OpaqueToken, useValue: Array<Type|any[]>, multi: boolean}[]}}
     */
    ModalModule.withComponents = function (entryComponents) {
        return {
            ngModule: ModalModule,
            providers: [
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents, multi: true }
            ]
        };
    };
    /**
     * Returns a NgModule for use in the root Module.
     * @param entryComponents A list of dynamically inserted components (dialog's).
     * @returns ModuleWithProviders
     */
    ModalModule.forRoot = function (entryComponents) {
        return {
            ngModule: ModalModule,
            providers: [
                index_3.Overlay,
                { provide: tokens_1.OverlayRenderer, useClass: index_1.DOMOverlayRenderer },
                { provide: platform_browser_1.EVENT_MANAGER_PLUGINS, useClass: index_1.DOMOutsideEventPlugin, multi: true },
                { provide: core_1.ANALYZE_FOR_ENTRY_COMPONENTS, useValue: entryComponents || [], multi: true }
            ]
        };
    };
    ModalModule = __decorate([
        core_1.NgModule({
            declarations: [
                index_3.ModalOverlay,
                index_2.SwapComponentDirective,
                index_2.CSSBackdrop,
                index_2.CSSDialogContainer,
                index_3.OverlayDialogBoundary,
                index_3.OverlayTarget,
                index_3.DefaultOverlayTarget
            ],
            exports: [
                index_2.CSSBackdrop,
                index_2.CSSDialogContainer,
                index_2.SwapComponentDirective,
                index_3.OverlayDialogBoundary,
                index_3.OverlayTarget,
                index_3.DefaultOverlayTarget
            ],
            entryComponents: [
                index_3.ModalOverlay,
                index_2.CSSBackdrop,
                index_2.CSSDialogContainer
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], ModalModule);
    return ModalModule;
}());
exports.ModalModule = ModalModule;
//# sourceMappingURL=angular2-modal.module.js.map