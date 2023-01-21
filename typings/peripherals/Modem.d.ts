type Range<F extends number, T extends number> = number;

/**
 * Modem peripheral
 */
declare interface Modem extends Table {
    open: (this: void, channel: Range<0, 65535>) => void;
    isOpen: (this: void, channel: Range<0, 65535>) => boolean;
    close: (this: void, channel: Range<0, 65535>) => void;
    closeAll: (this: void) => void;
    transmit: (this: void, channel: Range<0, 65535>, replyChannel: Range<0, 65535>, payload: any) => void;
    isWireless: (this: void) => boolean;
    getNamesRemote: (this: void) => string[];
    isPresentRemote: (this: void, name: PeripheralType | string) => boolean;
    getTypeRemote: (this: void, name: PeripheralType | string) => string | null;
    hasRemoteType: (this: void, name: string, type: PeripheralType | string) => boolean | null;
    getMethodsRemote: (this: void, name: PeripheralType | string) => string[] | null;
    callRemote: (this: void, remoteName: PeripheralType | string, method: string, ...arguments: any) => string | any;
    getNameLocal: (this: void) => string | null;
}
