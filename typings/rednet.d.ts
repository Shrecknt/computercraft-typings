declare const CHANNEL_BROADCAST = 65535;
declare const CHANNEL_REPEAT = 65533;
declare const MAX_ID_CHANNELS = 65500;

declare let rednet: {
    open: (this: void, modem: string) => void;
    close: (this: void, modem?: string) => void;
    isOpen: (this: void, modem?: string) => boolean;
    send: (this: void, recipient: number, message: any, protocol?: string) => boolean;
    broadcast: (this: void, message: any, protocol?: string) => void;
    receive: (this: void, protocol_filter?: string, timeout?: number) => LuaMultiReturn<[number, string, string | null]> | null;
    host: (this: void, protocol: string, hostname: string) => void;
    unhost: (this: void, protocol: string) => void;
    lookup: (this: void, protocol: string, hostname?: string) => number[] | number | null;
    run: (this: void) => void;
};