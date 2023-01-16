import { Callback } from "./types";
export declare class CustomEventWithSubscribers {
    dispatch(nameEvent: string, params?: any): void;
    subscribe(nameEvent: string, callback: Callback): void;
    unsubscribe(nameEvent: string): void;
}
