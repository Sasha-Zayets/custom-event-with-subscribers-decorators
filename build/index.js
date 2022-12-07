"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscribeCustomEvent = exports.DispatchCustomEvent = void 0;
var DispatchCustomEvent_1 = require("./DispatchCustomEvent");
Object.defineProperty(exports, "DispatchCustomEvent", { enumerable: true, get: function () { return DispatchCustomEvent_1.DispatchCustomEvent; } });
var SubscribeCustomEvent_1 = require("./SubscribeCustomEvent");
Object.defineProperty(exports, "SubscribeCustomEvent", { enumerable: true, get: function () { return SubscribeCustomEvent_1.SubscribeCustomEvent; } });
__exportStar(require("./types"), exports);
