import { Injectable } from '@angular/core';
import customEvent from "custom-event-with-subscribers";
import { Callback } from './types';

@Injectable({
  providedIn: 'root'
})
export class CustomEventWithSubscribersDecoratorsService {
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
