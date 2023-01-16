import customEvent from "custom-event-with-subscribers";
import { Callback } from "./types";

export class CustomEventWithSubscribers {
    dispatch(nameEvent: string, params?: any) {
        customEvent.dispatch(nameEvent, params);
    }

    subscribe(nameEvent: string, callback: Callback) {
        customEvent.subscribe(nameEvent, callback);
    }

    unsubscribe(nameEvent: string) {
        customEvent.unsubscribe(nameEvent);
    }
}
