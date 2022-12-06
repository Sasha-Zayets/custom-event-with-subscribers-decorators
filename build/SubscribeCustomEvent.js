"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeCustomEvent = exports.ISubscribeCustomEvent = void 0;
const custom_event_with_subscribers_1 = __importDefault(require("custom-event-with-subscribers"));
class ISubscribeCustomEvent {
    subscribe(nameEvent, callback) { }
    unsubscribe(nameEvent) { }
}
exports.ISubscribeCustomEvent = ISubscribeCustomEvent;
function SubscribeCustomEvent(target) {
    Object.defineProperty(target.prototype, 'subscribe', {
        value: function (nameEvent, callback) {
            custom_event_with_subscribers_1.default.subscribe(nameEvent, callback);
        },
    });
    Object.defineProperty(target.prototype, 'unsubscribe', {
        value: function (nameEvent) {
            custom_event_with_subscribers_1.default.unsubscribe(nameEvent);
        },
    });
    return target;
}
exports.SubscribeCustomEvent = SubscribeCustomEvent;
