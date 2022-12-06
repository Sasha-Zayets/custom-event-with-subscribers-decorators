type Constructor = {
    new (...args: any[]): any;
};
interface IDispatchCustomEventBase {
    dispatch: (nameEvent: string, params?: any) => void;
}
export declare class IDispatchCustomEvent implements IDispatchCustomEventBase {
    dispatch(nameEvent: string, params?: any): void;
}
export declare function DispatchCustomEvent<T extends Constructor>(target: T): T;
export {};
