/**
 * Sides because why not
 */
type side = "top" | "bottom" | "front" | "back" | "left" | "right";

/**
 * Representation of the lua table
 * It's basically the same as a javascript object, so there isnt much to do
 */
declare class Table extends Object {
    // TODO: something idk lol
}

/**
 * Monitor peripheral
 * TODO: Move to its own file
 */
declare class Monitor extends Table {
    write: (this: void, text: string) => void;
    clearLine: (this: void) => void;
    setCursorPos: (this: void, x: number, y: number) => void;
}

// List of peripherals and their names as strings
type Peripheral = Monitor;
type PeripheralType = "monitor";

declare let peripheral: {
    /**
     * Get the names of connected peripherals
     * @returns A string array of the names of all connected peripherals
     */
    getNames: (this: void) => string[];

    /**
     * Check if a peripheral exists
     * @param name The name or side of the side to check
     * @returns If the peripheral is present given the name or side
     */
    isPresent: (this: void, name: side | string) => boolean;

    /**
     * 
     * @param peripheral 
     * @returns 
     */
    getType: (this: void, peripheral: side | string | Peripheral) => (PeripheralType | undefined);

    /**
     * 
     * @param peripheral 
     * @param peripheral_type 
     * @returns 
     */
    hasType: (this: void, peripheral: side | string | Peripheral, peripheral_type: PeripheralType) => boolean;

    /**
     * 
     * @param name 
     * @returns 
     */
    getMethods: (this: void, name: side | string) => (string[] | undefined);

    /**
     * 
     * @param peripheral 
     * @returns 
     */
    getName: (this: void, peripheral: Peripheral) => string;

    /**
     * 
     * @param name 
     * @param method 
     * @param arguments 
     * @returns 
     */
    call: (this: void, name: side | string, method: string, ...arguments: any) => any;

    /**
     * 
     * @param name 
     * @returns 
     */
    wrap: (this: void, name: side | string) => (Peripheral | undefined);

    /**
     * 
     * @param type 
     * @param filter 
     * @returns 
     */
    find: (this: void, type: string, filter?: (name: string, wrapped: Peripheral) => boolean) => Peripheral;
}