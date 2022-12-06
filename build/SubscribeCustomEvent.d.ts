type Constructor = {
    new (...args: any[]): any;
};
type Callback = (data: any) => void;
interface ISubscribeCustomEventBase {
    subscribe: (nameEvent: string, callback: Callback) => void;
    unsubscribe: (nameEvent: string) => void;
}
export declare class ISubscribeCustomEvent implements ISubscribeCustomEventBase {
    subscribe(nameEvent: string, callback: Callback): void;
    unsubscribe(nameEvent: string): void;
}
export declare function SubscribeCustomEvent<T extends Constructor>(target: T): T;
export {};
