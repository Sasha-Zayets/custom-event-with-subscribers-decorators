import customEvent from 'custom-event-with-subscribers';
import { Callback, Constructor } from './types';

export function SubscribeManualCustomEvent<T extends Constructor>(target: T) {
  target.prototype.subscribe = (nameEvent: string, callback: Callback) => {
    customEvent.subscribe(nameEvent, callback);
  };

  target.prototype.unsubscribe = (nameEvent: string) => {
    customEvent.unsubscribe(nameEvent);
  };

  return target;
}

export function SubscribeCustomEvent<T extends Constructor>(
  eventName: string,
  keyForState?: string,
  defaultState?: any
): Function {
  return (target: T): T => {
    const stateKey = keyForState || 'state';
    const state = defaultState || {};

    // Set field state
    target.prototype[stateKey] = state;
    target.prototype.subscribe = function (event: string, callback: Callback) {
      customEvent.subscribe(event, callback);
    };
    target.prototype.unsubscribe = function () {
      customEvent.unsubscribe(eventName);
    };
    target.prototype.setStateComponent = function <T>(data: T) {
      this[stateKey] = data;
    };

    const ngOnDestroy = target.prototype.ngOnDestroy;
    const ngOnInit = target.prototype.ngOnInit;

    // Custom ngOnDestroy, added unsubscribe method to function
    target.prototype.ngOnDestroy = function () {
      if (this.unsubscribe && typeof this.unsubscribe === 'function') {
        this.unsubscribe();
      }

      ngOnDestroy &&
        typeof ngOnDestroy === 'function' &&
        ngOnDestroy.apply(this, arguments);
    };

    // Custom ngOnInit, added subscribe method to function
    target.prototype.ngOnInit = function () {
      if (this.subscribe && typeof this.subscribe === 'function') {
        this.subscribe(eventName, (data: any) => {
          this[stateKey] = data;
        });
      }

      if (ngOnInit && typeof ngOnInit === 'function') {
        ngOnInit.apply(this, arguments);
      }
    };

    return target;
  };
}
