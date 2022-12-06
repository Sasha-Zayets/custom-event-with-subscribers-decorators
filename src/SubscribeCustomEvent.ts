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

export function SubscribeCustomEvent<T extends Constructor>(target: T) {
  Object.defineProperty(target.prototype, 'subscribe', {
    value: function (nameEvent: string, callback: Callback) {
      customEvent.subscribe(nameEvent, callback);
    },
  });

  Object.defineProperty(target.prototype, 'unsubscribe', {
    value: function (nameEvent: string) {
      customEvent.unsubscribe(nameEvent);
    },
  });

  return target;
}
