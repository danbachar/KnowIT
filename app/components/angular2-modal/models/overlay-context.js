"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
var fluent_assign_1 = require('./../framework/fluent-assign');
var utils_1 = require('./../framework/utils');
exports.DEFAULT_VALUES = {
    inElement: false,
    isBlocking: true,
    keyboard: [27],
    supportsKey: function supportsKey(keyCode) {
        return this.keyboard.indexOf(keyCode) > -1;
    }
};
var DEFAULT_SETTERS = [
    'inElement',
    'isBlocking',
    'keyboard'
];
var OverlayContext = (function () {
    function OverlayContext() {
    }
    OverlayContext.prototype.normalize = function () {
        if (this.isBlocking !== false)
            this.isBlocking = true;
        if (this.keyboard === null) {
            this.keyboard = [];
        }
        else if (typeof this.keyboard === 'number') {
            this.keyboard = [this.keyboard];
        }
        else if (!Array.isArray(this.keyboard)) {
            this.keyboard = exports.DEFAULT_VALUES.keyboard;
        }
    };
    return OverlayContext;
}());
exports.OverlayContext = OverlayContext;
/**
 * A core context builder for a modal window instance, used to define the context upon
 * a modal choose it's behaviour.
 */
var OverlayContextBuilder = (function (_super) {
    __extends(OverlayContextBuilder, _super);
    function OverlayContextBuilder(defaultValues, initialSetters, baseType) {
        if (defaultValues === void 0) { defaultValues = undefined; }
        if (initialSetters === void 0) { initialSetters = undefined; }
        if (baseType === void 0) { baseType = undefined; }
        _super.call(this, utils_1.extend(exports.DEFAULT_VALUES, defaultValues || {}), utils_1.arrayUnion(DEFAULT_SETTERS, initialSetters || []), baseType || OverlayContext // https://github.com/Microsoft/TypeScript/issues/7234
        );
    }
    /**
     * Returns an new OverlayConfig with a context property representing the data in this builder.
     * @param base A base configuration that the result will extend
     * @returns OverlayConfig
     */
    OverlayContextBuilder.prototype.toOverlayConfig = function (base) {
        return utils_1.extend(base || {}, {
            context: this.toJSON()
        });
    };
    OverlayContextBuilder = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [Object, Array, Function])
    ], OverlayContextBuilder);
    return OverlayContextBuilder;
}(fluent_assign_1.FluentAssign));
exports.OverlayContextBuilder = OverlayContextBuilder;
/**
 * A helper to create an `OverlayConfig` on the fly.
 * Since `OverlayConfig` requires context it means a builder is needed, this process had some boilerplate.
 * When a quick, on the fly overlay config is needed use this helper to avoid that boilerplate.
 *
 * A builder is used as an API to allow setting the context and providing some operations around the modal.
 * When a developers knows the context before hand we can skip this step, this is what this factory is for.
 *
 * @param context The context for the modal
 * @param baseContextType Optional. The type/class of the context. This is the class used to init a new instance of the context
 * @param baseConfig A base configuration that the result will extend
 * @returns {OverlayConfig}
 */
function overlayConfigFactory(context, baseContextType, baseConfig) {
    return new OverlayContextBuilder(context, undefined, baseContextType).toOverlayConfig(baseConfig);
}
exports.overlayConfigFactory = overlayConfigFactory;
//# sourceMappingURL=overlay-context.js.map