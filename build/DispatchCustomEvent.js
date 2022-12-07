"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DispatchCustomEvent = void 0;
const custom_event_with_subscribers_1 = __importDefault(require("custom-event-with-subscribers"));
function DispatchCustomEvent(target) {
    Object.defineProperty(target.prototype, 'dispatch', {
        value: function (nameEvent, params) {
            custom_event_with_subscribers_1.default.dispatch(nameEvent, params);
        },
    });
    return target;
}
exports.DispatchCustomEvent = DispatchCustomEvent;
