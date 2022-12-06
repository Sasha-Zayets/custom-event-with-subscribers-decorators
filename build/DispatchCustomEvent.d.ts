type Constructor = {
    new (...args: any[]): any;
};
interface IDispatchCustomEventBase {
    dispatch: (nameEvent: string) => void;
}
export declare class IDispatchCustomEvent implements IDispatchCustomEventBase {
    dispatch(nameEvent: string): void;
}
export declare function DispatchCustomEvent<T extends Constructor>(BaseClass: T): {
    new (...args: any[]): {
        [x: string]: any;
        dispatch(nameEvent: string, params?: any): void;
    };
} & T;
export {};
