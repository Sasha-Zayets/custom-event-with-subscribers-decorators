type Constructor = {
    new (...args: any[]): any;
};
type Callback = (data: any) => void;
interface ISubscribeCustomEventBase {
    subscribe: (nameEvent: string, callback: Callback) => void;
    unsubscribe: (nameEvent: string) => void;
}
export declare class ISubscribeManualCustomEvent implements ISubscribeCustomEventBase {
    subscribe(nameEvent: string, callback: Callback): void;
    unsubscribe(nameEvent: string): void;
}
export declare function SubscribeManualCustomEvent<T extends Constructor>(target: T): T;
export interface ISubscribeCustomEvent {
    setStateComponent?: <T>(data: T) => void;
}
export declare function SubscribeCustomEvent<T extends Constructor>(eventName: string, keyForState?: string, defaultState?: any): (target: T) => T;
export {};
