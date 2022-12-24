type side = "top" | "bottom" | "front" | "back" | "left" | "right";

declare class Table extends Object {
    // TODO: something idk lol
}

declare class Monitor extends Table {
    write: (this: void, text: string) => void;
    clearLine: (this: void) => void;
    setCursorPos: (this: void, x: number, y: number) => void;
}

type Peripheral = Monitor;
type PeripheralType = "monitor";

declare class peripheral {
    static getNames: (this: void) => string[];
    static isPresent: (this: void, name: side | string) => boolean;
    static getType: (this: void, peripheral: side | string | Peripheral) => (PeripheralType | undefined);
    static hasType: (this: void, peripheral: side | string | Peripheral, peripheral_type: PeripheralType) => boolean;
    static getMethods: (this: void, name: side | string) => (string[] | undefined);
    static getName: (this: void, peripheral: Peripheral) => string;
    static call: (this: void, name: side | string, method: string, ...arguments: any) => any;
    static wrap: (this: void, name: side | string) => (Peripheral | undefined);
    static find: (this: void, type: string, filter?: (name: string, wrapped: Peripheral) => boolean) => Peripheral;
}