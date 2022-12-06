import customEvent from "custom-event-with-subscribers";

type Constructor = { new (...args: any[]): any };
type Callback = (data: any) => void;

interface ISubscribeCustomEventBase {
    subscribe: (nameEvent: string, callback: Callback) => void;
    unsubscribe: (nameEvent: string) => void;
}

export class ISubscribeCustomEvent implements ISubscribeCustomEventBase {
    subscribe(nameEvent: string, callback: Callback) {}
    unsubscribe(nameEvent: string) {}
}

export function SubscribeCustomEvent<T extends Constructor>(BaseClass: T) {
    return class extends BaseClass {
      constructor(...args: any[]) {
        super(...args);
      }
  
      subscribe(nameEvent: string, callback: Callback) {
        customEvent.subscribe(nameEvent, callback);
      }

      unsubscribe(nameEvent: string, callback: Callback) {
        customEvent.subscribe(nameEvent, callback);
      }
    };
}
