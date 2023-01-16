"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomEventWithSubscribers = void 0;
const custom_event_with_subscribers_1 = __importDefault(require("custom-event-with-subscribers"));
class CustomEventWithSubscribers {
    dispatch(nameEvent, params) {
        custom_event_with_subscribers_1.default.dispatch(nameEvent, params);
    }
    subscribe(nameEvent, callback) {
        custom_event_with_subscribers_1.default.subscribe(nameEvent, callback);
    }
    unsubscribe(nameEvent) {
        custom_event_with_subscribers_1.default.unsubscribe(nameEvent);
    }
}
exports.CustomEventWithSubscribers = CustomEventWithSubscribers;
