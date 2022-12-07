import customEvent from 'custom-event-with-subscribers';
import { Constructor } from './types';

export function DispatchCustomEvent<T extends Constructor>(target: T) {
  Object.defineProperty(target.prototype, 'dispatch', {
    value: function (nameEvent: string, params?: any) {
      customEvent.dispatch(nameEvent, params);
    },
  });
  return target;
}
