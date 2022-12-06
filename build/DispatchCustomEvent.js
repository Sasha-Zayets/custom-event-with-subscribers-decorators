"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchCustomEvent = exports.IDispatchCustomEvent = void 0;
const custom_event_with_subscribers_1 = __importDefault(require("custom-event-with-subscribers"));
class IDispatchCustomEvent {
    dispatch(nameEvent, params) { }
}
exports.IDispatchCustomEvent = IDispatchCustomEvent;
function DispatchCustomEvent(BaseClass) {
    return class extends BaseClass {
        constructor(...args) {
            super(...args);
        }
        dispatch(nameEvent, params) {
            custom_event_with_subscribers_1.default.dispatch(nameEvent, params);
        }
    };
}
exports.DispatchCustomEvent = DispatchCustomEvent;
