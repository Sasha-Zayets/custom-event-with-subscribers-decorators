import { Constructor } from './types';
export declare function SubscribeManualCustomEvent<T extends Constructor>(target: T): T;
export declare function SubscribeCustomEvent<T extends Constructor>(eventName: string, keyForState?: string, defaultState?: any): Function;
