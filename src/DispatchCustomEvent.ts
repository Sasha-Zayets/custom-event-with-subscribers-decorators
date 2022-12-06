import customEvent from "custom-event-with-subscribers";

type Constructor = { new (...args: any[]): any };

interface IDispatchCustomEventBase {
  dispatch: (nameEvent: string, params?: any) => void;
}

export class IDispatchCustomEvent implements IDispatchCustomEventBase {
  dispatch(nameEvent: string, params?: any) {}
}

export function DispatchCustomEvent<T extends Constructor>(BaseClass: T) {
  return class extends BaseClass {
    constructor(...args: any[]) {
      super(...args);
    }

    dispatch(nameEvent: string, params?: any) {
      customEvent.dispatch(nameEvent, params);
    }
  };
}
