type side = "top" | "bottom" | "front" | "back" | "left" | "right";

/** @noSelf */
declare class Table extends Object {
    // TODO: something idk lol
}

/** @noSelf **/
declare class Monitor extends Table {
    write: (text: string) => void;
    clearLine: () => void;
    setCursorPos: (x: number, y: number) => void;
}

type Peripheral = Monitor;
type PeripheralType = "monitor";

/** @noSelf **/
declare class peripheral {
    static getNames: () => string[];
    static isPresent: (name: side | string) => boolean;
    static getType: (peripheral: side | string | Peripheral) => (PeripheralType | undefined);
    static hasType: (peripheral: side | string | Peripheral, peripheral_type: PeripheralType) => boolean;
    static getMethods: (name: side | string) => (string[] | undefined);
    static getName: (peripheral: Peripheral) => string;
    static call: (name: side | string, method: string, ...arguments: any) => any;
    static wrap: (name: side | string) => (Peripheral | undefined);
    static find: (type: string, filter?: (name: string, wrapped: Peripheral) => boolean) => Peripheral;
}