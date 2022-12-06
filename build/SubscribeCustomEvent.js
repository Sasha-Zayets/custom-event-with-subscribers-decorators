"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeCustomEvent = exports.SubscribeManualCustomEvent = exports.ISubscribeManualCustomEvent = void 0;
const custom_event_with_subscribers_1 = __importDefault(require("custom-event-with-subscribers"));
class ISubscribeManualCustomEvent {
    subscribe(nameEvent, callback) { }
    unsubscribe(nameEvent) { }
}
exports.ISubscribeManualCustomEvent = ISubscribeManualCustomEvent;
function SubscribeManualCustomEvent(target) {
    target.prototype.subscribe = (nameEvent, callback) => {
        custom_event_with_subscribers_1.default.subscribe(nameEvent, callback);
    };
    target.prototype.unsubscribe = (nameEvent) => {
        custom_event_with_subscribers_1.default.unsubscribe(nameEvent);
    };
    return target;
}
exports.SubscribeManualCustomEvent = SubscribeManualCustomEvent;
function SubscribeCustomEvent(eventName, keyForState, defaultState) {
    return (target) => {
        const stateKey = keyForState || 'state';
        const state = defaultState || {};
        // Set field state
        target.prototype[stateKey] = state;
        target.prototype.subscribe = function (event, callback) {
            custom_event_with_subscribers_1.default.subscribe(event, callback);
        };
        target.prototype.unsubscribe = function () {
            custom_event_with_subscribers_1.default.unsubscribe(eventName);
        };
        target.prototype.setStateComponent = function (data) {
            this[stateKey] = data;
        };
        const ngOnDestroy = target.prototype.ngOnDestroy;
        const ngOnInit = target.prototype.ngOnInit;
        // Custom ngOnDestroy, added unsubscribe method to function
        target.prototype.ngOnDestroy = function () {
            if (this.unsubscribe && typeof this.unsubscribe === 'function') {
                this.unsubscribe();
            }
            ngOnDestroy &&
                typeof ngOnDestroy === 'function' &&
                ngOnDestroy.apply(this, arguments);
        };
        // Custom ngOnInit, added subscribe method to function
        target.prototype.ngOnInit = function () {
            if (this.subscribe && typeof this.subscribe === 'function') {
                this.subscribe(eventName, (data) => {
                    this[stateKey] = data;
                });
            }
            if (ngOnInit && typeof ngOnInit === 'function') {
                ngOnInit.apply(this, arguments);
            }
        };
        return target;
    };
}
exports.SubscribeCustomEvent = SubscribeCustomEvent;
