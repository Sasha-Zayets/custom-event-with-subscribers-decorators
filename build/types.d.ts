export type Constructor = {
    new (...args: any[]): any;
};
export type Callback = <T>(data: T) => void;
export declare abstract class IDispatchCustomEvent {
    abstract dispatch(nameEvent: string, params?: any): void;
}
export declare abstract class ISubscribeManualCustomEvent {
    abstract subscribe(nameEvent: string, callback: Callback): void;
    abstract unsubscribe(nameEvent: string): void;
}
export declare abstract class ISubscribeCustomEvent {
    abstract setStateComponent<T>(data: T): void;
}
export type IDispatchAndManualSubscribeEvent = IDispatchCustomEvent & ISubscribeManualCustomEvent;
export type IDispatchAndSubscribeEvent = IDispatchCustomEvent & ISubscribeCustomEvent;
